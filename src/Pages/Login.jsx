/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const {signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathName || '/';
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleToggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user ;
            console.log(user)
            Swal.fire({
                title: 'User Login SuccessFul',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
              navigate(from, {replace: true})
        })
        
    }
    return (
        <div>
            <Helmet><title>Music School || Login</title></Helmet>
            <div className="w-full mx-auto m-20 max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type={passwordVisible ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <button onClick={handleToggleVisibility} className='text-2xl'> {passwordVisible ? <AiFillEyeInvisible/> : <AiFillEye/>}</button>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="text-4xl animate-spin p-3 rounded-sm">
                    <FcGoogle/>
                    </button>
                </div>
                <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/register' className='ml-2'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;