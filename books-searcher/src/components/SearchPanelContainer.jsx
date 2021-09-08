import React from "react";
import { connect } from "react-redux";
import SearchPanel from "./SearchPanel";
import {setCategories, setSortByName, setQuantity, setItemIndex, setKeyWords} from '../store/querysearch/action'
import {setBooks} from '../store/booksarray/action'

function SearchPanelContainer(props){
    return (
        <SearchPanel {...props}/>
    );
}

const mapStateToPrors = state =>{
    return {
        categories: state.configQuery.categories,
        sort_by: state.configQuery.sort_by,
        quantity: state.configQuery.quantity,
        itemindex: state.configQuery.itemindex,
        keywords: state.configQuery.keywords,
    };
};
const mapDispatchToProps = {
    setCategories: setCategories,
    setSortName: setSortByName, 
    setQuantity: setQuantity,
    setItemIndex: setItemIndex,
    setKeyWords: setKeyWords,  
    setBooks: setBooks, 
};

export default connect(mapStateToPrors,mapDispatchToProps)(SearchPanelContainer);