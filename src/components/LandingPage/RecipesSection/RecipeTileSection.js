import React from 'react';
import RecipeTile from './RecipeTile'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import recipe1 from '../../../images/recipe1.jpg'
import recipe2 from '../../../images/recipe2.jpg'
import recipe3 from '../../../images/recipe4.jpg'
import "../../Commons/Carousel.css"

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
                <RecipeTile
                    RecipeImage={recipe1}
                    RecipeName={'Strawberry cheese cake'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />

                <RecipeTile
                    RecipeImage={recipe2}
                    RecipeName={'English breakfast with bananas with'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe3}
                    RecipeName={'Brocolli Onion salad'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe3}
                    RecipeName={'Brocolli Onion salad'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe3}
                    RecipeName={'Brocolli Onion salad'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe1}
                    RecipeName={'Strawberry cheese cake'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe2}
                    RecipeName={'English breakfast with bananas with'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe2}
                    RecipeName={'English breakfast with bananas with'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
                <RecipeTile
                    RecipeImage={recipe2}
                    RecipeName={'English breakfast with bananas with'}
                    RecipeDescription={'Harira is a classic Moroccan comfort soup made with tomatoes, lentils, chickpeas, fresh herbs, dried spices, and meat, making it a filling and satisfying dish.'}
                    CookTime={'1hr 10mins'}
                />
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