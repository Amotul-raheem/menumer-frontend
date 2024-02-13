import React from "react";
import { MdAdd } from "react-icons/md";


function AddButton (props) {
    const {text} = props

    return(
        <div className="bg-[#839788] flex justify-between items-center px-4 py-3 rounded-full">
            <MdAdd color="#FFFFFF" size="22px" />
            <p className="font-outfit text-white mx-2 text-base font-medium">{text}</p>
        </div>
    )
}


export default AddButton