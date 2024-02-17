import React, {useEffect, useState} from 'react';
import {isEmpty} from 'lodash'
import NavBar from '../Commons/NavBar/NavBar'
import RecipePageBody from './RecipePageBody'
import FooterSection from '../Commons/Footer/FooterSection'
import RecipePayload from '../RecipePayload'

function RecipePage() {

    const Recipe = RecipePayload
    const {DishesList} = Recipe
    const {IngredientList: defaultIngredientList, PreparationSteps: defaultPreparationSteps} = DishesList[0];
    const [clicked, setClicked] = useState(null);
    const [ingredients, setIngredients] = useState(defaultIngredientList)
    const [preparationSteps, setPreparationSteps] = useState(defaultPreparationSteps)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const selectDishForIngredients = ({dishName}) => {
        setStateForRecipe({
            dishName,
            setState: setIngredients,
            defaultState: defaultIngredientList,
            key: "IngredientList"
        })
    }

    const selectDishForPreparation = ({dishName}) => {
        setStateForRecipe({
            dishName,
            setState: setPreparationSteps,
            defaultState: defaultPreparationSteps,
            key: "PreparationSteps"
        })
    }
    const setStateForRecipe = ({dishName, setState, defaultState, key}) => {
        const result = DishesList.find(dish => dish.Name === dishName)[key];
        if (!result) {
            setState(defaultState);
        } else {
            setState(result);
            setClicked(dishName);
        }
    }
    return (
        <div>
            <NavBar
                isSearchCreateRecipe={true}
            />
            <RecipePageBody
                RecipeHeroImage="/img/recipe3.jpg"
                RecipeName={Recipe.RecipeName}
                DishesList={DishesList}
                textClicked={clicked}
                PreparationSteps={preparationSteps}
                IngredientList={ingredients}
                selectDishForIngredients={selectDishForIngredients}
                selectDishForPreparation={selectDishForPreparation}
            />
            <FooterSection/>
        </div>
    )
}

export default RecipePage