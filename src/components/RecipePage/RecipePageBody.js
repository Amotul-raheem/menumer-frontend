import React from 'react';

function RecipePageBody(props) {
    const {RecipeHeroImage, RecipeName, PreparationSteps, DishesList,  IngredientList} = props
    return(
        <div className='bg-[#F5F5F5] h-auto'>
            <div>
                <img className='w-screen h-[400px] min-h-[500px] mb-8 ' src={RecipeHeroImage}/>
            </div>
            <div className='mx-48 my-16 '>
                <h1 className='font-amaticSc text-4xl text-[#CF5C36]'>{RecipeName}</h1>
                <div className='bg-[#FFFFFF] w-1/3 h-auto min-w-[450px] min-h-[500px] my-8  p-8 shadow-box rounded-lg'>
                    <h1 className='font-amaticSc text-3xl text-[#73877B] my-4'>LIST OF INGREDIENTS</h1>
                    <ul className='flex list-none justify-between w-2/3'>
                        {DishesList?.map((dish) => (
                            <li className='font-outfit text-[#BCBCBC] text-base hover:text-[#CF5C36] mt-2 focus:text-[#CF5C36] cursor-pointer '>{dish.Name}</li>
                        ))}
                    </ul>
                    <ul className='list-disc font-outfit text-[#8F8F8F] text-sm leading-9  py-2 m-4'>
                        {IngredientList?.map((ingredient) => (
                            <li>{ingredient.Quantity} {ingredient.Unit} of {ingredient.IngredientName}</li>
                        ))}
                    </ul>
                </div>
                <div className='bg-[#FFFFFF] w-2/3 h-auto min-h-[500px] min-w-[700px] my-8  p-8 shadow-box rounded-lg'>
                    <h1 className='font-amaticSc text-3xl text-[#73877B] my-4'>PREPARATION STEPS</h1>
                    <ul className='flex list-none justify-between w-1/2'>
                        {DishesList?.map((dish) => (
                            <li className='font-outfit text-[#BCBCBC] mt-2 text-base hover:text-[#CF5C36] focus:text-[#CF5C36] cursor-pointer'>{dish.Name}</li>
                        ))}
                    </ul>
                    {PreparationSteps?.map((step)=> (
                        <div className='my-6'>
                            <h2 className='font-amaticSc text-xl text-[#CF5C36]'>{step.StepHeading}</h2>
                            <p className='font-outfit text-sm text-[#8F8F8F]'>{step.StepDetails}</p>
                        </div>
                        
                    ))}
                   
                </div>

            </div>

        </div>
    )
}

export default RecipePageBody