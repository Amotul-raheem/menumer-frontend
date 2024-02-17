import React from "react";
import CornerImage from '../../images/CornerDeco.png'
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="relative bg-white h-auto w-[35%] flex flex-col  items-center px-16 py-12  shadow-box rounded-2xl mini-tablet:w-[80%] tablets:w-[80%] laptops:w-[70%]">
                <img className="absolute -top-16 -left-28" src={CornerImage} alt=''/>
                <h1 className='font-amaticSc text-4xl text-[#CF5C36] py-3'>SIGN UP</h1>
                <p className='font-outfit text-[#8F8F8F] text-lg'>Create an account to get started</p>
                <hr className='w-full mt-8 mb-4 bg-[#D9D9D9]'/>

                <div className="w-full ">
                    <div className="my-6">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Username</p>
                        <input
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>
                    <div className="my-6">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Email</p>
                        <input
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>
                    <div className="my-6">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Password</p>
                        <input
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>
                    <div className="my-6">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Confirm Password</p>
                        <input
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>
                    <div className="mt-12 mb-6 flex justify-end">
                        <button className="bg-[#839788] text-white font-outfit px-6 py-3 rounded-full">Proceed</button>
                    </div>
                    <div className="mt-6 flex justify-center items-center">
                        <p className="text-[#28262C] font-outfit text-base">Already have an account?
                            <Link to={"/sign-in"}> <span className='text-[#CF5C36]'>Sign in</span></Link>
                            </p>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SignUp