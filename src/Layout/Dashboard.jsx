import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineShoppingCart , AiFillWallet, AiFillHome, AiFillRead } from "react-icons/ai";
import { BsBook, BsFillPeopleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import useCart from '../Hooks/UseCart';
const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {
                    isAdmin ?<>
                    <li>
                    <NavLink to='/dashboard/home' style={({ isActive, isPending }) => {
                        return {
                        color: isPending ? "bold" : "",
                        backgroundColor: isActive ? "green" : "",
                        };
                    }}
                    ><AiFillHome/>Admin Home</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/enrolledclass' style={({ isActive, isPending }) => {
                        return {
                        color: isPending ? "bold" : "",
                        backgroundColor: isActive ? "green" : "",
                        };
                    }}><AiFillRead/>ADD Classes</NavLink>
                </li>
                <li className='flex'>
                    <NavLink to="/dashboard/mycart"
                    style={({ isActive, isPending }) => {
                        return {
                        color: isPending ? "bold" : "",
                        backgroundColor: isActive ? "green" : "",
                        };
                    }}>
                    <BsBook/>Manage Classes</NavLink>
                    
                </li>
                <li>
                    <NavLink to='/dashboard/history' style={({ isActive, isPending }) => {
                        return {
                        color: isPending ? "bold" : "",
                        backgroundColor: isActive ? "green" : "",
                        };
                    }}><FaUsers/>Manage User</NavLink>
                </li>
                    </> :<>
                    <li>
                            <NavLink to='/dashboard/home' style={({ isActive, isPending }) => {
                                return {
                                color: isPending ? "bold" : "",
                                backgroundColor: isActive ? "green" : "",
                                };
                            }}
                            ><AiFillHome/>User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/enrolledclass' style={({ isActive, isPending }) => {
                                return {
                                color: isPending ? "bold" : "",
                                backgroundColor: isActive ? "green" : "",
                                };
                            }}><BsFillPeopleFill/>Enrolled Classes</NavLink>
                        </li>
                        <li className='flex'>
                            <NavLink to="/dashboard/mycart"
                            style={({ isActive, isPending }) => {
                                return {
                                color: isPending ? "bold" : "",
                                backgroundColor: isActive ? "green" : "",
                                };
                            }}>
                            <AiOutlineShoppingCart/>My Selected Classes <div className="badge badge-accent">+{cart?.length || 0}</div></NavLink>
                            
                        </li>
                        <li>
                            <NavLink to='/dashboard/history' style={({ isActive, isPending }) => {
                                return {
                                color: isPending ? "bold" : "",
                                backgroundColor: isActive ? "green" : "",
                                };
                            }}><AiFillWallet/>Payment History</NavLink>
                        </li>
                    </>
                }
                
                
                <div className="divider"></div>
                <li><NavLink><AiFillHome/>Home</NavLink></li>
                <li><NavLink><AiFillRead/>Our Classes</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;