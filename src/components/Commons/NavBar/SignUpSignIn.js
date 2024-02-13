import React from "react";
import {Link} from "react-router-dom";

function SignUpSignIn() {
    return(
        <div className='flex justify-between'>
            <Link to={"/sign-in"}><p className=' text-[#CF5C36]  mx-5 my-3 cursor-pointer' >Sign In</p></Link>
            <Link to={"/sign-up"}> <button className='h-10 w-22 bg-[#839788] text-[#FFFFFF] rounded-full mt-1 px-4 mx-3 shadow-button outlne-0'>Sign Up</button></Link>
        </div>
    )
}

export default SignUpSignIn