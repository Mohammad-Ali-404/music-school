/* eslint-disable react/prop-types */
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const PopularClassCategory = ({item}) => {
    const {image, className, department, available_seats, price, teacher} = item;
    return (
        <div data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
           <div className="card w-96 glass">
                <figure><img className="h-[300px]" src={image} alt="music!"/></figure>
                <div className="card-body">
                <h2 className="card-title font-bold">{className}</h2>
                <p > <span className="font-semibold  rounded-xl px-2">Teacher:</span> {teacher}</p>
                <p> <span className="font-semibold  rounded-xl px-2">Department:</span> {department}</p>
                <p><span className="font-semibold rounded-xl px-2">Available Seats:</span> {available_seats}</p>
                <p><span className="font-semibold  rounded-xl px-2">Price:</span> {price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCategory;