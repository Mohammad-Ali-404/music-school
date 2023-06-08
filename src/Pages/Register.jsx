/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Helmet><title>Music School || Register</title></Helmet>
            <div className="flex mx-auto m-16 flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">Create a New Account</p>
                </div>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photo" placeholder="Enter Your Photo " className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full mb-4 px-8 py-3 font-semibold rounded-md bg-violet-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center  text-gray-400">Already Have an account go to!
                        <Link to='/login' className='ml-2'>Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;