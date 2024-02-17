import React from 'react';
import PopularRecipeTile from "./PopularRecipeTile"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import "../../Commons/Carousel.css"
import {Link} from "react-router-dom";



function RecipeScrollSection(props) {
    const carouselRef = React.useRef();

    const scroll = (direction) => {
        if (direction === 'left') {
            carouselRef.current.scrollBy({top: 0, left: -300, behavior: 'smooth'});
        } else {
            carouselRef.current.scrollBy({top: 0, left: 300, behavior: 'smooth'});
        }
    };
    const {RecipeCategory, PopularRecipeList} = props
    return (
        <div className='mx-12  h-auto '>
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
            <div className='carousel' ref={carouselRef}>
                {PopularRecipeList.map((recipe) => {
                    return(
                        <Link to={"/recipes"}>
                            <PopularRecipeTile
                                RecipeImage={recipe.RecipeImage}
                                RecipeName={recipe.RecipeName}
                                RecipeDescription={recipe.RecipeDescription}
                                CookTime={recipe.CookTime}
                            />
                        </Link>

                    )
                })}
            </div>

        </div>
    )
}

export default RecipeScrollSection