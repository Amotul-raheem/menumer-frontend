import React from 'react';
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'
import {FaInstagramSquare} from 'react-icons/fa';
import {Link} from "react-router-dom";


function Footer() {
    return (
        <div className='flex flex-col mx-16 mt-10'>
            <div className='flex justify-between '>
                <div className='flex flex-col mt-24'>
                   <Link to={"/home"}><h1 className='font-croissant text-xl text-[#000000] '>MENUMER</h1></Link>
                    <p className='font-outfit text-[#8F8F8F] text-base my-3'>Secrets to all delicious delicacies lie
                        with us</p>
                    <div className='flex justify-between w-1/2 my-4'>
                        <BsFacebook size={20}/>
                        <BsTwitter size={20}/>
                        <FaInstagramSquare size={20}/>
                    </div>
                </div>
                <div className='flex justify-between my-8'>
                    <div className='flex flex-col mx-12'>
                        <h2 className='font-outfit text-[#28262C] text-xl'>Company</h2>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Career</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>About Us</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Press</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>News</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Media kit</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Contact</p>
                    </div>
                    <div className='flex flex-col mx-12'>
                        <h2 className='font-outfit text-[#28262C] text-xl'>Resources</h2>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Blog</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Newsletter</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Event</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Help center</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Tutorial</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Support</p>

                    </div>
                    <div className='flex flex-col mx-12'>
                        <h2 className='font-outfit text-[#28262C] text-xl'>Legal</h2>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Terms</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Privacy</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Cookies</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Help center</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Licences</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Settings</p>
                        <p className='font-outfit text-[#8F8F8F] font-light text-base py-2'>Contact</p>

                    </div>
                </div>
            </div>
            <hr className=' mt-5 mb-4  bg-[#D9D9D9]' />
            <div className='flex justify-end items-center text-[#28262C] mb-4'>
                <BiCopyright size={21}/>
                <p className='px-1'> {new Date().getFullYear()} Menumer. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer