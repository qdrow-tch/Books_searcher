import React from "react";
import classes from './BtnGetMore.module.css';

function GetMoreButton ({children,  ...props}) {
    return(
        <button {...props} className = {classes.getmorebutton} >
            {children}
        </button>
    )
};

export default GetMoreButton;