import React from "react";
import classes from './BtnSrch.module.css';

function SearchButton ({children,  ...props}) {
    return(
        <button {...props} className = {classes.searchbutton} >
            {children}
        </button>
    )
};

export default SearchButton;