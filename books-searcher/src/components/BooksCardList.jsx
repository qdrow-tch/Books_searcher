import React from "react";
import BookCard from "./BookCard";
import classes from './styles/Style.module.css'

function BooksCardList (props){
    return (
        <div className={classes.booksCardList}>
            {props.bookslist.map(book=>
                <BookCard 
                    key={book.id}
                    imglink={book.imageLinks.smallThumbnail} 
                    categories={book.categories[0]} 
                    title={book.title}
                    autors={book.authors}/>
                )}
             
        </div>
    );
}

export default BooksCardList;