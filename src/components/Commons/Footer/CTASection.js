import React from 'react';


function CTASection(){
    return(
        <div className='text-center flex flex-col justify-center items-center '>
            <h1 className='font-amaticSc text-4xl text-[#CF5C36] py-3 mt-16'>Subscribe to our newsletter</h1>
            <p className='font-outfit text-[#8F8F8F] text-lg'>Get the latest update from us. No spam</p>
            <div className='flex justify-between items-center my-10 h-14 w-[550px] bg-[#FFFFFF] shadow-input rounded-full '>
                <input className='h-12 bg-[#FFFFF] px-6 outline-0 text-[#8F8F8F] rounded-full' placeholder='Email address'/>
                <button className='bg-[#CF5C36] text-[#FFFFFF] text-l px-5  h-12 font-semibold rounded-full'>Subscribe</button>
            </div>
        </div>
    )
}

export default CTASection