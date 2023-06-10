/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const UseInstructor = () => {
    const [instructor, setInstructor] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('Instructor.json')
        .then(res => res.json())
        .then(data =>{
            setInstructor(data)
            setLoading(false)
        })
    },[])
    return ([instructor, loading]);
};

export default UseInstructor;