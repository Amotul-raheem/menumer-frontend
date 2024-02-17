import React from 'react';
import ScrollDownArrow from '../Commons/ScrollDownArrow'


function HeroSection() {
    return (
        <div className='bg-gradient-to-b from-[#F1F7ED] h-screen flex justify-center items-center  mini-tablet:h-[750px] tablets:h-[750px] laptops:h-[850px]'>
            <div className='w-1/2 text-center p-16 mini-tablet:w-full tablets:w-full laptops:w-[70%] mobile:w-full' >
                <h1 className='font-amaticSc text-6xl text-[#CF5C36] px-16'>EASY ACCESS TO DELICIOUS RECIPES MADE JUST FOR
                    YOU</h1>
                <p className='font-outfit text-[#28262C] text-sm px-40 py-8'>Get you well developed recipes and connect
                    with several experienced chefs to make your cooking experience the best</p>
                <div className='mt-8 relative'>
                    <h2 className='font-croissant text-lg text-[#000000] '>EXPLORE</h2>
                    {/*<ScrollDownArrow/>*/}
                </div>

            </div>
        </div>
    )
}

export default HeroSection