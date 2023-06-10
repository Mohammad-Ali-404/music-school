/* eslint-disable react/prop-types */
import React from 'react';
import { FcInvite, FcPhone } from "react-icons/fc";
const TopInstructorCategory = ({item}) => {
    const {image, name, class_name, email, phone} =item;
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
            <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 rounded-lg text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <span className="text-sm dark:text-gray-400">{class_name}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
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

export default TopInstructorCategory;