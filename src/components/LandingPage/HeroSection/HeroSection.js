import React from 'react';
import HeroImage from '../../../images/HeroImage.png'
import cornertext from '../../../images/corner text.png'
import TileImage from '../../../images/TileImage.png'
import './HeroSection.css'
import {Link} from "react-router-dom";

function HeroSection() {
    return(
        <div className='Hero-section-container'>
            <div className='Hero-section-left'>
                <div className='Hero-section-header-container'>
                    <h1 className=''>Secrets to all the delicious dishes</h1>
                    <img className='' src={cornertext}/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <Link to={"/home"}><button className="bg-[#839788] text-white font-outfit px-6 py-3 rounded-full my-6">Explore</button></Link>
            </div>
            <div className='Hero-section-right' >
                <img src={HeroImage} alt=""/>
            </div>
            <div className='Hero-section-tile'>
                <img src={TileImage} alt=""/>
            </div>
        </div>
    )
}

export default HeroSection