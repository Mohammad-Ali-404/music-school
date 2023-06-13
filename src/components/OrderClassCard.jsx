/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import LazyLoad from 'react-lazy-load';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderClassCard = ({item}) => {
    const {id, className, teacher, image, department, available_seats, price} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleToCart = item =>{
        console.log(item)
        if (user && user.email) {
          const selectClass = {SelectClassId: id, className, department, price, email: user.email}
          fetch('http://localhost:5000/carts', {
              method: "POST",
              headers:{
                  "content-type":"application/json"
              },
              body:JSON.stringify(selectClass)
          })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  Swal.fire({
                      title: 'Custom animation with Animate.css',
                              showClass: {
                                  popup: 'animate__animated animate__fadeInDown'
                              },
                              hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                              }
                    })
                  }
              })
      }
      else{
          Swal.fire({
              title: 'Please Login to Buy the class',
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Login Now'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate('/login', {state: {from: location}})
                      }
            
                  })

      }
    }
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
                <button onClick={()=>handleToCart(item)} className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
      </div> 
    );
};

export default OrderClassCard;