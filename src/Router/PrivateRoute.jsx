/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    }
    if (user) {
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;