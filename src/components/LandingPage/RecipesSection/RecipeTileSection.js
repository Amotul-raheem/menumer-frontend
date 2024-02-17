import React from 'react';
import RecipeTile from './RecipeTile'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import "../../Commons/Carousel.css"
import {RecipeList} from "./helper";
import {Link} from "react-router-dom";

function RecipeTileSection() {
    const carouselRef = React.useRef();

    const scroll = (direction) => {
        if (direction === 'left') {
            carouselRef.current.scrollBy({top: 0, left: -300, behavior: 'smooth'});
        } else {
            carouselRef.current.scrollBy({top: 0, left: 300, behavior: 'smooth'});
        }
    };

    return(
        <div className='relative '>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={() => scroll('left')}
            >
                <FiChevronLeft className="text-3xl text-[#839788] hover:text-grey-900"/>
            </button>

            <div className='carousel mx-12' ref={carouselRef}>
                {RecipeList.map((recipe) => {
                    return(
                        <Link to={"/recipes"}>
                            <RecipeTile
                                RecipeImage={recipe.RecipeImage}
                                RecipeName={recipe.RecipeName}
                                RecipeDescription={recipe.RecipeDescription}
                                CookTime={recipe.CookTime}
                            />
                        </Link>
                    )
                })}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={() => scroll('right')}
            >
                <FiChevronRight className="text-3xl text-[#839788] hover:text-grey-900"/>
            </button>
        </div>
    )
}

export default RecipeTileSection