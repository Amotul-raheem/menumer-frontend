import React from 'react';
import Vegetables1 from '../../images/Vegetables1.png'

function CreateRecipeBody(props){
    const {Qty, Unit} = props
    return(
        <div className='bg-[#F5F5F5] '>
            <h1 className='font-amaticSc text-6xl m-12 text-[#CF5C36]'>CREATE RECIPE</h1>
            <div className='flex justify-center h-auto items-center'>
                <img className='h-[150px] w-[170px] absolute right-[450px] top-[150px] z-10' src={Vegetables1}/>
                <div className='bg-[#FBFBFB] shadow-box min-h-[700px] min-w-[950px] rounded-xl relative'>
                    <div>
                        <h1>NAME OF RECIPE</h1>
                        <input placeholder={"Recipe name..."}/>
                    </div>
                    <div>
                        <h1>ENTER DESCRIPTION</h1>
                        <textarea placeholder={"Enter description..."}/>
                    </div>
                    <div>
                        <h1>NAME OF DISH COMPONENT</h1>
                        <input />
                    </div>
                    <div>
                        <h1>LIST OF INGREDIENTS</h1>
                        <div>
                            <input placeholder={"Name of ingredient"}/>
                            <input placeholder={"Other name"}/>
                            <option>{Qty}</option>
                            <option>{Unit}</option>
                        </div>
                    </div>
                    <div>
                        <h1>PREPARATION STEPS</h1>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreateRecipeBody