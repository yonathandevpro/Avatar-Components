import { useEffect, useState } from 'react';
import { IoPersonSharp } from "react-icons/io5"; 

export default function Avatar({children, src, alt}) {

    function getRandomColors() {
        const colors = ['green', 'blue', 'red', 'pink', 'orange'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }


    return(
        (children && 
        <div className={`avatar-child ${getRandomColors()}`}>
            {children}
        </div>) || 
        ( src &&
        <div className="avatar-child">
            <img src={src} alt={alt ? alt : ""}/>
        </div> ) || 
        <div className={`avatar-child ${getRandomColors()}`}>
            <IoPersonSharp />
        </div>
    );
    
}