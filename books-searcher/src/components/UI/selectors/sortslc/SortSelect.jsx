import React from "react";
import classes from './SortSelect.module.css';

function SortSelect({options, defaultValue, sort_by, onChange}){
    return(
        <div className={classes.sortername}>
            <select 
                value={sort_by}
                onChange={event=>onChange(event.target.value)}
                className={classes.SortSelect}>
            <option value="">{defaultValue}</option>
             {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
            </select>
        </div>
        
    );
}

export default SortSelect