import React from 'react';
import HeroBox from '../HeroBox/HeroBox';
import Manu from '../Manu/Manu';
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <Manu></Manu>
            <HeroBox></HeroBox>
        </div>
    );
};

export default Home;