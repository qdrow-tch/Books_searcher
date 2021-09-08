import React from "react";
import classes from './FilterSelect.module.css'

function FilterSelect({options, defaultValue, onChange, value}){
    return(
        <div className={classes.filtername}>
            <select 
                value={value}
                onChange={event=>onChange(event.target.value)}
                className={classes.filterSelector}>
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

export default FilterSelect