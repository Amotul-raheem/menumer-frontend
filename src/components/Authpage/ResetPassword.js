import CornerImage from "../../images/CornerDeco2.png";
import React from "react";


function ResetPassword () {
    return(
        <div className="flex justify-center items-center h-screen">
            <div
                className="relative bg-white h-auto w-[35%] flex flex-col  items-center px-16 py-12  shadow-box rounded-2xl">
                <img className="absolute -top-16 -left-28" src={CornerImage} alt=''/>
                <h1 className='font-amaticSc text-4xl text-[#CF5C36] py-4'>RESET PASSWORD</h1>
                <p className='font-outfit text-[#8F8F8F] text-lg text-center px-8' >Your new password will be different from previously used passwords</p>

                <div className="w-full my-4">
                    <div className="my-8">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Password</p>
                        <input
                            type="password"
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>
                    <div className="my-8">
                        <p className="text-[#28262C] font-outfit text-lg my-2">Confirm Password</p>
                        <input
                            type="password"
                            className="w-full bg-[#FFFFFF] h-12 px-4 outline-0 text-[#8F8F8F] shadow-input rounded-lg"
                        />
                    </div>

                    <div className="mt-12 mb-6 flex justify-end">
                        <button className="bg-[#839788] text-white font-outfit px-6 py-3 rounded-full">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ResetPassword