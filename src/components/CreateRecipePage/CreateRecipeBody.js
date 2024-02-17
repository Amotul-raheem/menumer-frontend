import React from 'react';
import Vegetables7 from '../../images/Vegetables7.png'
import AddButton from "../Commons/Button/AddButton";

function CreateRecipeBody() {

    return (
        <div className='bg-[#F5F5F5] '>
            <h1 className='font-amaticSc text-6xl m-12 text-[#CF5C36]'>CREATE RECIPE</h1>
            <div className='flex justify-center h-auto items-center my-36 '>
                <img className="absolute right-[400px] top-[230px] z-10 mobile:right-0 mini-tablet:right-0 tablets:right-0"  src={Vegetables7} alt="vegetable"/>
                <div
                    className='bg-[#FBFBFB] flex flex-col justify-center items-center shadow-box min-h-[700px] min-w-[950px] mini-tablet:min-w-[850px] tablets:min-w-[800px] rounded-xl relative'>
                    <div className="w-full h-full p-12">
                        <div className="flex justify-between mt-8 mb-16">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl ">NAME OF RECIPE</h1>
                            <div className="w-[65%] font-outfit">
                                <input
                                    className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "
                                    placeholder={"Recipe name..."}/>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8 mb-16 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl ">ENTER DESCRIPTION</h1>
                            <div className="w-[65%] font-outfit">
                                <textarea
                                    className="w-full bg-[#FFFFFF] h-48 py-4 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "
                                    placeholder={"Enter description..."}/>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8 mb-16 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl">NAME OF DISH COMPONENT</h1>
                            <div className="w-[65%] font-outfit">
                                <input
                                    className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "
                                    placeholder={"Dish component Name..."}/>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8 mb-16 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl">LIST OF INGREDIENTS</h1>
                            <div className="flex flex-col w-[65%] font-outfit">
                                <div className="flex justify-between w-full">
                                    <input
                                        className="bg-[#FFFFFF] h-12 w-[35%] px-3 mr-3 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                                        placeholder={"Name of ingredient..."}/>
                                    <input
                                        className="bg-[#FFFFFF] h-12 w-[35%] px-3 mr-3 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                                        placeholder={"Other name..."}/>
                                    <select
                                        className="bg-[#FFFFFF] h-12 w-[15%] px-2  mr-3 outline-0 text-[#8F8F8F] shadow-input rounded-lg">
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                    </select>
                                    <select
                                        className="bg-[#FFFFFF] h-12 w-[15%] px-2  outline-0 text-[#8F8F8F] shadow-input rounded-lg">
                                        <option>Unit 1</option>
                                        <option>Unit 1</option>
                                        <option>Unit 1</option>
                                        <option>Unit 1</option>
                                        <option>Unit 1</option>
                                    </select>
                                </div>
                                <div className="mt-12 mb-6">
                                    <textarea
                                        className="w-full bg-[#FFFFFF] h-52 py-4 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "/>
                                </div>
                                <div className="flex justify-end my-2">
                                    <AddButton text="Add another dish component"/>
                                </div>
                                <div className="mt-6 mb-12">
                                    <textarea
                                        className="w-full bg-[#FFFFFF] h-52 py-4 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "/>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between my-8 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl">PREPARATION STEPS</h1>
                            <div className="flex flex-col w-[65%] font-outfit">
                                <input
                                    className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "
                                    placeholder={"Enter Heading..."}/>
                                <div className="mt-12 mb-6">
                                    <textarea
                                        className="w-full bg-[#FFFFFF] h-52 py-4 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "/>
                                </div>
                                <div className="flex justify-end my-2">
                                    <AddButton text="Add"/>
                                </div>
                                <div className="mt-6 mb-12">
                                    <textarea
                                        className="w-full bg-[#FFFFFF] h-52 py-4 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg "/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between my-8 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl">COOK TIME</h1>
                            <div className="flex flex-col w-[65%] font-outfit">
                                <div className="flex w-full">
                                    <select
                                        placeholder="Hrs"
                                        className="bg-[#FFFFFF] h-12 w-[20%] px-3  mr-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg">
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                    </select>
                                    <select
                                        placeholder="Mins"
                                        className="bg-[#FFFFFF] h-12 w-[20%] px-3  mr-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg">
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                        <option>Qty 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between my-16 ">
                            <h1 className="font-amaticSc text-[#CF5C36] font-bold text-2xl">UPLOAD PICTURE</h1>
                            <div
                                className="flex justify-center items-center w-[65%] bg-[#FFFFFF] h-12 text-[#8F8F8F] shadow-input rounded-lg font-outfit">
                                <p className="text-base">Choose...</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-24 mb-8 ">
                            <button className="bg-[#BCBCBC] text-white text-base rounded-full px-5 py-3 ">Save as draft</button>
                            <button className="bg-[#CF5C36] text-white text-base rounded-full px-7 py-3 ">Post</button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreateRecipeBody