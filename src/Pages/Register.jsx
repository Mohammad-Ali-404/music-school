/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, useProfileUpdate} = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      useProfileUpdate(data.name, data.photoURL)
      .then(()=>{
        console.log('user Profile update')
        reset()
      })
      Swal.fire({
        title: 'User Created Successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate('/')
    });
  };

  return (
    <div>
      <Helmet>
        <title>Music School || Register</title>
      </Helmet>
      <div className="flex mx-auto m-16 flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-400">Create a New Account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                {...register('name', { required: true })}
                name="name"
                placeholder="Enter Your Full Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900"
              />
              {errors.name && <p className="text-red-500">Name is required.</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input
                type="email"
                {...register('email', { required: true })}
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900"
              />
              {errors.email && <p className="text-red-500">Email is required.</p>}
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">Photo URL</label>
              <input
                type="text"
                {...register('photo', { required: true })}
                name="photo"
                placeholder="Enter Your Photo "
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900"
              />
              {errors.photo && <p className="text-red-500">PhotoUrl is required.</p>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900"
              />
              {errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters.</p>}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-500">Password must have one uppercase letter and one special character.</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">Confirm Password</label>
              <input
                type="password"
                {...register('password_repeat', { required: true })}
                placeholder="Confirm Password"
                id="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900"
              />
              {watch('password_repeat') !== watch('password') && getValues('password_repeat') ? (
                <p key="password-mismatch">password not match</p>
              ) : null}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                value="Sign Up"
                className="btn w-full mb-4 px-8 py-3 font-semibold rounded-md bg-violet-400 dark:text-gray-900"
              />
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already Have an account? Go to! <Link to="/login" className="ml-2">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;