import React from 'react';
import profileIcon from '../../../images/ProfileIcon.png'
import searchIcon from '../../../images/SearchIcon.png'
import AddButton from "../Button/AddButton";
import {Link} from "react-router-dom";


function SearchCreateRecipe() {
    return(
        <div className='flex items-center justify-between '>
            <div className='h-12 w-96 mx-3 bg-[#F5F5F5] rounded-3xl flex justify-between shadow-input mobile:hidden mini-tablet:hidden tablets:hidden'>
                <input className='bg-[#F5F5F5] rounded-3xl p-4  outline-0 text-[#8F8F8F]' placeholder='Search..'/>
                <img className='h-4 w-4 m-4' src={searchIcon}/>
            </div>
            <img className='h-8 w-8 mx-4 my-2' src={profileIcon}/>
            <Link to={"/create-recipe"}><AddButton text="Create Recipe"/></Link>
        </div>
    )
}

export default SearchCreateRecipe