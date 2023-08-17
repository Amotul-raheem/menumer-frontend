import React from 'react';
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../Commons/Carousel.css';


function RecipeTile(props) {
    const {RecipeImage, RecipeName, RecipeDescription, CookTime} = props
    return (
        <div className='h-[420px] w-[350px] bg-[#FFFFFF] flex flex-col mx-3 my-10 relative overflow-hidden rounded-3xl text-center carousel-item' >
            <div className='flex justify-between flex-row-reverse '>
                <img className=' h-56 w-56 rounded-full absolute -left-12 -top-12' src={RecipeImage}/>
                <FontAwesomeIcon className='px-5 py-2' icon={faEllipsis} style={{color: "#CF5C36"}} size={"2x"}/>
            </div>
            <div className='mt-36 px-3 mb-6'>
                <h1 className='font-amaticSc text-3xl text-[#28262C]'>{RecipeName}</h1>
                <p className='font-outfit text-[#8F8F8F] font-light text-sm py-2 px-4'>{RecipeDescription}</p>
            </div>
            <div className=' flex flex-row-reverse mt-6'>
                <p className='font-outfit text-[#8F8F8F] font-light text-sm  pr-4'>{CookTime}</p>
                <FontAwesomeIcon className='px-2 pt-1' icon={faClock} style={{color: "#8F8F8F"}} size={"xs"}/>
            </div>

        </div>
    )
}

export default RecipeTile