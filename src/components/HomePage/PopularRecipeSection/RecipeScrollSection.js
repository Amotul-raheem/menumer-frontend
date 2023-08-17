import React from 'react';
import PopularRecipeTile from "./PopularRecipeTile"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import recipe2 from '../../../images/recipe2.jpg'
import recipe3 from '../../../images/recipe3.jpg'
import recipe4 from '../../../images/recipe4.jpg'
import recipe1 from '../../../images/recipe1.jpg'

import "../../Commons/Carousel.css"



function RecipeScrollSection(props) {
    const carouselRef = React.useRef();

    const scroll = (direction) => {
        if (direction === 'left') {
            carouselRef.current.scrollBy({top: 0, left: -300, behavior: 'smooth'});
        } else {
            carouselRef.current.scrollBy({top: 0, left: 300, behavior: 'smooth'});
        }
    };
    const {RecipeCategory} = props
    return (
        <div className='mx-12  h-[350px]'>
            <div className='flex justify-between my-6 '>
                <h1 className='font-amaticSc text-4xl '>{RecipeCategory}</h1>
                <div className=''>
                    <button
                        className="mx-2"
                        onClick={() => scroll('left')}
                    >
                        <FiChevronLeft className="text-3xl text-white bg-[#CF5C36] rounded-full h-8 w-8 "/>
                    </button>
                    <button
                        className="mx-2"
                        onClick={() => scroll('right')}
                    >
                        <FiChevronRight className="text-3xl text-grey-900 text-white bg-[#CF5C36] rounded-full h-8 w-8 "/>
                    </button>
                </div>
            </div>
            <div className='carousel ' ref={carouselRef}>
                <PopularRecipeTile
                    RecipeImage = {recipe2}
                    RecipeName = {"Italian lemon chicken orzo soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe3}
                    RecipeName = {"Italian lemon chicken orzo soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe2}
                    RecipeName = {"Morrocan sweet potato lentil soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe3}
                    RecipeName = {"Italian lemon chicken orzo soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe1}
                    RecipeName = {"Italian lemon chicken orzo soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe3}
                    RecipeName = {"Morrocan sweet potato lentil soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe4}
                    RecipeName = {"Italian lemon chicken orzo soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
                <PopularRecipeTile
                    RecipeImage = {recipe1}
                    RecipeName = {"Morrocan sweet potato lentil soup"}
                    RecipeDescription = {"Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish."}
                    CookTime = {"1hr 10mins"}

                />
            </div>

        </div>
    )
}

export default RecipeScrollSection