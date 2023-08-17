import React from 'react';
import {GrClose} from 'react-icons/gr';

function SuggestedCreatorButton(props) {

    const {CreatorInitials, CreatorName, Followers} = props

    return (
        <div className='flex justify-between bg-[#FFFFFF] rounded-xl shadow-box w-80 h-20 px-4 m-6' >
            <div className='flex mx-2 my-4'>
                <div className='bg-[#28262C] h-[50px] w-[50px] rounded-full flex text-center items-center justify-center mr-2'>
                    <h1 className='text-white font-outfit text-2xl font-semibold'>{CreatorInitials}</h1>
                </div>
                <div className='flex flex-col items-start mt-2'>
                    <h2 className='text-[#000000] text-base font-outfit'>{CreatorName}</h2>
                    <p className='text-[#8F8F8F] text-xs font-outfit'>{Followers} followers</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end my-3'>
                <GrClose color="#8F8F8F" size={10} className='text-[#8F8F8F]'/>
                <button className='w-[72px] bg-[#CF5C36] text-white rounded-full font-outfit'>Follow</button>
            </div>
        </div>
    )
}

export default SuggestedCreatorButton