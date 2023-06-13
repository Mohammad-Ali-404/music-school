/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
AOS.init();
const PopularClassCategory = ({item}) => {
    const {id, image, className, department, available_seats, price, teacher} = item;
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    console.lo
    const handleAddToCart = (item) =>{
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
                        title: 'Your selected classes will be added on the cart',
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
        <div data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" className='mt-16'>
           <div className="card w-96 glass">
                <figure><img className="h-[300px]" src={image} alt="music!"/></figure>
                <div className="card-body">
                <h2 className="card-title font-bold">{className}</h2>
                <p > <span className="font-semibold  rounded-xl px-2">Teacher:</span> {teacher}</p>
                <p> <span className="font-semibold  rounded-xl px-2">Department:</span> {department}</p>
                <p><span className="font-semibold rounded-xl px-2">Available Seats:</span> {available_seats}</p>
                <div className='text-left'>
                    <p className=' w-1/5 ml-64 mb-5 bg-red-500  p-4 text-gray-100 font-bold text-base rounded-full'> {price}$</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-primary">Select</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCategory;