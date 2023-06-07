/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Helmet><title>Music School || Login</title></Helmet>
            <div className="w-full mx-auto m-20 max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
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