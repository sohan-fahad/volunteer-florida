import React from 'react';
import './HeroBox.css'

const HeroBox = () => {
    return (
        <div className="heroBox">
            <h1 className="hero-text">I grow by helping people in need.</h1>
            <div  className="search-container">
                <input type="search" placeholder="Search Here..."  id="search-box" />
                <input type="submit" value="Search" id="search-btn" />
            </div>
        </div>
    );
};

export default HeroBox;