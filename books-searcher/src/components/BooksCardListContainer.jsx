import React from "react";
import { connect } from "react-redux";
import BooksCardList from './BooksCardList';
import {pushBooks} from '../store/booksarray/action'

function BookCardListContainer(props){
    return (
        <BooksCardList {...props}/>
    );
}

const mapStateToPrors = state =>{
    return  {
        bookslist: state.changeBooksArray.bookslist
    };
};
const mapDispatchToProps = {
    pushBooks,    
};

export default connect(mapStateToPrors,mapDispatchToProps)(BookCardListContainer);