import React from 'react';
import HeroImage from '../../../images/HeroImage.png'
import cornerText from '../../../images/corner text.png'
import Vegetable5 from '../../../images/Vegetables5.png'
import Vegetable6 from '../../../images/Vegetables6.png'
import Vegetable7 from '../../../images/Vegetables7.png'
import Vegetable4 from '../../../images/Vegetables4.png'
import TileImage from '../../../images/TileImage.png'
import './HeroSection.css'
import {Link} from "react-router-dom";

function HeroSection() {
    return(
        <div className='Hero-section-container'>
            {/*<img className="deco-image deco-1" src={Vegetable5} alt=""/>*/}
            {/*<img className="deco-image deco-2" src={Vegetable6} alt=""/>*/}
            {/*<img className="deco-image deco-3" src={Vegetable7} alt=""/>*/}
            {/*<img className="deco-image deco-4" src={Vegetable4} alt=""/>*/}

            <div className='Hero-section-left'>
                <div className='Hero-section-header-container'>
                    <h1 className=''>Secrets to all the delicious dishes</h1>
                    <img  src={cornerText}/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <Link to={"/home"}><button className="bg-[#839788] text-white font-outfit px-6 py-3 rounded-full my-6">Explore</button></Link>
            </div>
            <div className='Hero-section-right block mini-tablet:hidden tablets:hidden laptops:hidden' >
                <img src={HeroImage} alt=""/>
            </div>
            <div className='Hero-section-tile block mini-tablet:hidden tablets:hidden laptops:hidden'>
                <img src={TileImage} alt=""/>
            </div>
        </div>
    )
}

export default HeroSection