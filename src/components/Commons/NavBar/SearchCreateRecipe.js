import React from 'react';
import profileIcon from '../../../images/ProfileIcon.png'
import searchIcon from '../../../images/SearchIcon.png'


function SearchCreateRecipe() {
    return(
        <div className='flex justify-between pb-2'>
            <div className='h-12 w-96 mx-2 bg-[#F5F5F5] rounded-3xl flex justify-between shadow-input'>
                <input className='h-4  bg-[#F5F5F5] rounded-3xl p-4 my-2 outline-0 text-[#8F8F8F]' placeholder='Search..'/>
                <img className='h-4 w-4 m-4' src={searchIcon}/>
            </div>
            <img className='h-8 w-8 mx-3 my-2' src={profileIcon}/>
            <button className=' bg-[#839788] text-[#FFFFFF] rounded-full px-4 py-1 mx-3 shadow-button'> + Create Recipe</button>
        </div>
    )
}

export default SearchCreateRecipe