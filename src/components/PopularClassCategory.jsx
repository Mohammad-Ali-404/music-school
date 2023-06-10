/* eslint-disable react/prop-types */
import React from 'react';

const PopularClassCategory = ({item}) => {
    const {image, className, department, available_seats, price, teacher} = item;
    return (
        <div>
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