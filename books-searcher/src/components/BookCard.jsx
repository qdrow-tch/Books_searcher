import React from "react";
import classes from './styles/Style.module.css'

function BookCard(props) {
    let fCategory = ""
    if (props.categories.length != 0) {
        fCategory = props.categories[0];
    }
    return (
        <div className={classes.bookCard}>
            <img className={classes.imgBooks} src={props.imglink} alt="preview"/>
            <div className={classes.descBooks}>
                <p>{fCategory}</p>
                <h3>{props.title}</h3>
                <p>{props.autors.join(", ")}</p>
            </div>
        </div>
    );
}

export default BookCard;