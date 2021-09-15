import React from "react";
import BookCard from "./BookCard";
import GetMoreButton from "./UI/buttons/btngetmore/BtnGetMore";
import classes from './styles/Style.module.css'

function BooksCardList (props){
    let getMore_Button;
    if (props.bookslist.length > 0 && (props.booksCardList.length % 30 == 0)){
        getMore_Button=<getMore_Button/>;
    }
    return (
        <div>
            <div className={classes.booksCardList}>
            {props.bookslist.map(book=>
                <BookCard 
                    key={book.id}
                    imglink={book.imageLinks.smallThumbnail} 
                    categories={book.categories} 
                    title={book.title}
                    autors={book.authors}/>
                )}
            
            </div>
            {getMore_Button}
        </div>
    );
}

export default BooksCardList;