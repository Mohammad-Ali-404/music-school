/* eslint-disable react/prop-types */
import React from 'react';
import { FcInvite, FcPhone } from 'react-icons/fc';
import LazyLoad from 'react-lazy-load';

const AllInstructorCategory = ({item}) => {
    const {name, image, email, classes_taken, phone} = item;
    return (
        <div>
           <div className="flex flex-col justify-center max-w-xs p-6 shadow-lg rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
            <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            </LazyLoad>
                
                <div className="space-y-4 text-center divide-y divide-gray-400">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                        <p>Class Taken: {classes_taken}</p>
                    </div>
                    <div className="space-y-1 ">
                        <span className="flex items-center space-x-2 mt-4">
                            <FcInvite/>
                            <span className="dark:text-gray-400">{email}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <FcPhone/>
                            <span className="dark:text-gray-400">{phone}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorCategory;