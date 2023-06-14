/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
export const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const userProfileUpdate = (name, photo) =>{
       return updateProfile(auth.currentUser ,{
            displayName: name, photoURL: photo
        })
        .then()
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
        logout, 
        userProfileUpdate,
        googleProvider
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