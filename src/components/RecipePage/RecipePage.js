import React from 'react';
import NavBar from '../Commons/NavBar/NavBar'
import RecipePageBody from './RecipePageBody'
import FooterSection from '../Commons/Footer/FooterSection'
import recipe4 from '../../images/recipe3.jpg'
import RecipePayload from '../RecipePayload'

function RecipePage(){
    const Recipe = RecipePayload
    const DishesList = Recipe.DishesList
    const Dish = DishesList[0]

    return(
        <div>
            <NavBar
                isSearchCreateRecipe = {true}
            />
                <RecipePageBody
                    RecipeHeroImage={recipe4}
                    RecipeName={Recipe.RecipeName}
                    DishesList={DishesList}
                    PreparationSteps={Dish.PreparationSteps}
                    IngredientList={Dish.IngredientList}

                />

            <FooterSection/>
        </div>
    )
}

export default RecipePage