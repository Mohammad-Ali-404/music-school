import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/UseCart'
import { AiTwotoneDelete } from "react-icons/ai";

const MyCart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((sum, item )=> item.price + sum, 0)
    console.log(cart)
        return (
        <div>
            <Helmet><title>Music School || My Cart</title></Helmet>
            <div className='uppercase text-2xl font-bold flex justify-evenly'>
                <p>Selected Classes: {cart.length}</p>
                <p>Total price: {totalPrice}$</p>
                <button className='btn btn-accent'>Payment</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Classes</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item, index) => <tr
                        key={item._id}
                        >
                        <th>
                        {index + 1}
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                        </td>
                        <td>{item.className}</td>
                        <th>
                            {item.price}$
                        </th>
                        <th >
                            <button className="btn px-2 pb-8 text-slate-200 bg-red-700 text-3xl btn-sm"><AiTwotoneDelete/></button>
                        </th>
                    </tr>)
                    }
                    
                    </tbody>
                    
                </table>
                </div>
        </div>
    );
};

export default MyCart;