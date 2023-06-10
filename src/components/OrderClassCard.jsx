/* eslint-disable react/prop-types */
import React from 'react';
import LazyLoad from 'react-lazy-load';

const OrderClassCard = ({item}) => {
    const {className, teacher, image, available_seats, price} = item;
    return (
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                <figure><img src={image} alt="class!" /></figure>
            </LazyLoad>
            <div className="card-body">
                <div className='flex mx-auto'>
                    <div>
                        <h2 className="card-title">{className}</h2>
                        <p className='text-base font-semibold'>Instructor: {teacher}</p>
                        <p className='font-semibold'>Available Seats: {available_seats}</p>
                    </div>
                    <p className='mt-6 ml-4 bg-red-500  p-4 text-gray-100 font-bold text-base rounded-full'>{price}$</p>
                </div>
               
                <div className="card-actions justify-end">
                <button className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
      </div> 
    );
};

export default OrderClassCard;