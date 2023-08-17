import React from 'react';
import RecipeScrollSection from "./RecipeScrollSection"

function PopularRecipeSection(){
    return(
        <div className='h-auto my-16  '>
            <div className='text-center my-16 '>
                <h1 className='font-amaticSc text-5xl m-4 text-[#CF5C36]'>OUR POPULAR RECIPES</h1>
            </div>
            <RecipeScrollSection
                RecipeCategory = {'Soups'}
            />
            <RecipeScrollSection
                RecipeCategory = {'Vegetables'}
            />
            <RecipeScrollSection
                RecipeCategory = {'Pasta'}
            />
            <RecipeScrollSection
                RecipeCategory = {'Smoothies'}
            />
        </div>
    )
}
export default PopularRecipeSection