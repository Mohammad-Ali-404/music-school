import React from 'react';
import Banner from './Home/Banner';
import PopularClass from './Home/PopularClass';
import Instructor from './Home/Instructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;