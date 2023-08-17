import React from "react";
import SignUpSignIn from "./SignUpSignIn"
import SearchCreateRecipe from "./SearchCreateRecipe"
import ProfileIcon from "./ProfileIcon"

function NavBar(props) {

    const {isSignUpSignIn, isSearchCreateRecipe, isProfileIcon} = props
    
    return(
        <div className='px-16 py-4 h-18 bg-[#FBFBFB] shadow-nav flex justify-between'>
            <h1 className='text-xl font-croissant text-[#00000] p-2'> MENUMER. </h1>
            {isSignUpSignIn && <SignUpSignIn/>}
            {isSearchCreateRecipe && <SearchCreateRecipe/>}
            {isProfileIcon && <ProfileIcon/>}

        </div>
    )
}

export default NavBar