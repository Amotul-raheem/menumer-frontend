import React from 'react';

function RecipeTypeButton(props) {
   const  {recipeType} = props
    
    return (
        <div>
            <button className='font-outfit h-12 w-28 p-3 m-3 rounded-full bg-transparent text-[#839788] text-base border border-[#839788] hover:bg-[#839788] hover:text-white focus:bg-[#839788] focus:text-white'>{recipeType}</button>
        </div>
    )
}

export default RecipeTypeButton