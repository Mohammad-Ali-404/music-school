/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const UseClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('Classes.json')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
            setLoading(false)
        })
    },[])
    return ([classes, loading]);
};

export default UseClasses;