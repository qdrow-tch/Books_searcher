import React from "react";
import classes from './styles/Style.module.css'

function BookCard(props) {
    return (
        <div className={classes.bookCard}>
            <img className={classes.imgBooks} src={props.imglink} alt="preview"/>
            <div className={classes.descBooks}>
                <p>{props.categories}</p>
                <h3>{props.title}</h3>
                <p>{props.autors}</p>
            </div>
        </div>
    );
}

export default BookCard;