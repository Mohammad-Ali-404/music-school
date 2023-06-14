import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineShoppingCart , AiFillWallet, AiFillHome, AiFillRead } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
const Dashboard = () => {
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
                {/* Sidebar content here */}
                <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }><AiFillHome/>User Home</NavLink></li>
                <li><NavLink><BsFillPeopleFill/>Enrolled Classes</NavLink></li>
                <li><NavLink to="/dashboard/mycart"
  style={({ isActive, isPending }) => {
    return {
      color: isPending ? "bold" : "",
      backgroundColor: isActive ? "green" : "black",
    };
  }}><AiOutlineShoppingCart/>My Selected Classes</NavLink></li>
                <li><NavLink><AiFillWallet/>Payment History</NavLink></li>
                <div className="divider"></div>
                <li><NavLink><AiFillHome/>Home</NavLink></li>
                <li><NavLink><AiFillRead/>Our Classes</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;