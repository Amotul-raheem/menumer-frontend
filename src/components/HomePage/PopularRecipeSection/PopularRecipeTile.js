import React from 'react'

import {BsShareFill} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FaEllipsisH} from 'react-icons/fa'
import {BsHeart} from 'react-icons/bs'

import '../../Commons/Carousel.css';




function PopularRecipeTile(props) {
    const {RecipeImage, RecipeName, CookTime, RecipeDescription} = props
    return(
        <div className='flex h-64 w-96 bg-[#F3F2F2] overflow-hidden justify-between relative shadow-tile carousel-item p-4 mx-2 cursor-pointer hover:transform hover:scale-110 hover:shadow-tile-hover transition duration-500'>
            <div className='flex flex-col justify-end'>
                <img className='h-28 w-28 rounded-full -left-4 -top-4 absolute' src={RecipeImage}/>
                <div className='flex justify-evenly'>
                    <BsShareFill className='mx-2'/>
                    <BsBookmark className='mx-2'/>
                </div>
            </div>
            <div className='flex flex-col justify-evenly ml-10'>
                <FaEllipsisH className='absolute top-0 right-3' color='#CF5C36' size='24px'/>
                <h1 className='font-amaticSc text-3xl text-[#73877B] px-4'>{RecipeName}</h1>
                <p className='font-outfit text-[#8F8F8F] text-xs px-4'>{RecipeDescription}</p>
                <div className='flex justify-between'>
                    <p className='font-outfit text-[#8F8F8F] text-xs px-4'>Cook: {CookTime}</p>
                    <BsHeart className='mx-4' color="#CF5C36"/>
                </div>
            </div>

        </div>
    )
}

export default PopularRecipeTile