import React from 'react';
import RecipeTypeButton from './RecipeTypeButton'

import '../../Commons/Carousel.css'
import RecipeTileSection from './RecipeTileSection'


function RecipesSection() {

    const recipeTypes = ["Vegetables", "Soups", "Salads", "Steak", "Smoothies", "Drinks", "Pasta"]

    return (
        <div className='flex items-center justify-center flex-col '>
            <div className='w-1/2 text-center'>
                <h1 className='font-amaticSc text-5xl m-4 text-[#CF5C36]'>OUR RECIPES</h1>
                <div className='flex justify-center flex-wrap px-28 py-6'>
                    {recipeTypes.map((recipeType) => (
                        <RecipeTypeButton
                            recipeType={recipeType}
                        />
                    ))}
                </div>
            </div>
            <div className='w-[98%]'>
                <RecipeTileSection/>
            </div>
        </div>

    )
}

export default RecipesSection