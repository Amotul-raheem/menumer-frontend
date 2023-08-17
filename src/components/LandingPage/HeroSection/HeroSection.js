import React from 'react';
import HeroImage from '../../../images/HeroImage.png'
import cornertext from '../../../images/corner text.png'
import TileImage from '../../../images/TileImage.png'
import './HeroSection.css'

function HeroSection() {
    return(
        <div className='Hero-section-container'>
            <div className='Hero-section-left'>
                <div className='Hero-section-header-container'>
                    <h1 className=''>Secrets to all the delicious dishes</h1>
                    <img className='' src={cornertext}/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <button>Explore</button>
            </div>
            <div className='Hero-section-right' >
                <img  src={HeroImage}/>
            </div>
            <div className='Hero-section-tile'>
                <img src={TileImage}/>
            </div>
        </div>
    )
}

export default HeroSection