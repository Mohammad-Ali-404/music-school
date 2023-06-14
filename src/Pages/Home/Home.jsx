import React, { useState } from 'react';
import Banner from './Home/Banner';
import PopularClass from './Home/PopularClass';
import Instructor from './Home/Instructor';
import SuccessfulStudent from './Home/SuccessfulStudent';

const Home = () => {
    const lightStyles = {
        backgroundColor: '#fff',
        color: '#000',
      };
    const darkStyles = {
        backgroundColor: '#222',
        color: '#fff',
      };
      
    const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
    return (
        <div className={`home-page ${theme}`} style={theme === 'light' ? lightStyles : darkStyles}>
            <input onClick={toggleTheme} type="checkbox" className="toggle" checked />
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <SuccessfulStudent></SuccessfulStudent>
        </div>
    );
};

export default Home;