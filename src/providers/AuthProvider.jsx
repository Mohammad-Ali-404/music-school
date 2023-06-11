/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (auth, email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (auth, email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user' ,currentUser)
            setLoading(false)
        })
        return () =>{
           return unsubscribe
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logout
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
           </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;