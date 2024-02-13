import React from "react";
import SignUpSignIn from "./SignUpSignIn"
import SearchCreateRecipe from "./SearchCreateRecipe"
import ProfileIcon from "./ProfileIcon"

function NavBar(props) {

    const {isSignUpSignIn, isSearchCreateRecipe, isProfileIcon} = props
    
    return(
        <div className='px-16 py-4 h-24 bg-[#FBFBFB] shadow-nav flex items-center justify-between'>
            <h1 className='text-xl font-croissant text-[#00000]'> MENUMER. </h1>
            {isSignUpSignIn && <SignUpSignIn/>}
            {isSearchCreateRecipe && <SearchCreateRecipe/>}
            {isProfileIcon && <ProfileIcon/>}

        </div>
    )
}

export default NavBar