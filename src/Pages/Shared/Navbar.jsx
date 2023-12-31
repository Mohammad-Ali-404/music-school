import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from '../../Hooks/UseCart';
import logo from '../../assets/logo/logo.png'
const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const [cart] = useCart()
    const handleLogut = () =>{
        logout(()=>{})
    }
    const navOption =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='classes'>Classes</Link></li>
    <li><Link to='instructor'>Instractor</Link></li>
    <li><Link>DashBoard</Link></li>
    <li className='ml-10 mt-1'>
        <Link to='/dashboard/mycart'>
            <button className="btn btn-sm">
                <AiOutlineShoppingCart className='text-xl'/>
                <div className="badge badge-accent">+{cart?.length || 0}</div>
            </button>
        </Link>
    </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                    <Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-16 rounded-full' src={logo} alt="" />
                    </Link>
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navOption}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Music School</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                { user ?
                    <div className='flex'>
                        <img className="w-12 h-12 rounded-full mr-8" src={user.photoURL} />
                        <button onClick={handleLogut} className='btn btn-outline'>Logout</button>
                    </div>
                    :
                    <Link to='login'><button className="btn btn-outline btn-primary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;