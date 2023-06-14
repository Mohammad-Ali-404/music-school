/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const UseInstructor = () => {
    const [instructor, setInstructor] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://summer-camp-server-rosy.vercel.app/instructor')
        .then(res => res.json())
        .then(data =>{
            setInstructor(data)
            setLoading(false)
        })
    },[])
    return ([instructor, loading]);
};

export default UseInstructor;