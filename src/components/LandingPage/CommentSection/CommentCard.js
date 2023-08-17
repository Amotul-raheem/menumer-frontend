import React from 'react';
import '../../Commons/Carousel.css';


function CommentCard(props) {
    
    const {ProfileImage, Comment, Name, Username} = props
    return(
            <div className= 'bg-[#FFFFFF] h-[220px] w-[360px] my-8 mx-3 shadow-box rounded-lg flex flex-col relative text-left carousel-item'>
                <img className='h-12 w-12 absolute -top-6 left-6' src={ProfileImage}/>
                <p className='font-outfit text-[#8F8F8F] font-light text-sm mt-6  p-3 '>{Comment}</p>
                <hr className='mx-3'/>
                <p className='font-outfit text-[#000000] text-base px-3 pt-3'>{Name}</p>
                <p className='font-outfit text-[#8F8F8F] font-light text-sm px-3'>{Username}</p>
            </div>


    )
}

export default CommentCard