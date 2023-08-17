import React from 'react';
import NavBar from '../Commons/NavBar/NavBar'
import CreateRecipeBody from './CreateRecipeBody'


function CreateRecipePage() {
    return (
        <div>
            <NavBar
                isProfileIcon={true}
            />
            <CreateRecipeBody/>
        </div>
    )
}

export default CreateRecipePage