import React from 'react';
import RecipeScrollSection from "./RecipeScrollSection"
import {RecipeList, RecipeList2, RecipeList3, RecipeList4} from "../../LandingPage/RecipesSection/helper";

function PopularRecipeSection(){
    return(
        <div className='h-auto my-16 py-16 '>
            <div className='text-center my-16 '>
                <h1 className='font-amaticSc text-5xl m-4 text-[#CF5C36]'>OUR POPULAR RECIPES</h1>
            </div>
            <RecipeScrollSection
                PopularRecipeList={RecipeList}
                RecipeCategory = {'Soups'}
            />
            <RecipeScrollSection
                PopularRecipeList={RecipeList2}
                RecipeCategory = {'Vegetables'}
            />
            <RecipeScrollSection
                PopularRecipeList={RecipeList3}
                RecipeCategory = {'Pasta'}
            />
            <RecipeScrollSection
                PopularRecipeList={RecipeList4}
                RecipeCategory = {'Smoothies'}
            />
        </div>
    )
}
export default PopularRecipeSection