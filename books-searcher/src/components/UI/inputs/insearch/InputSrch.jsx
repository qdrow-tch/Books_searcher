import React from "react";
import classes from './InputSrch.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

async function GetBooksFromBase(props) {
    if (props.keywords != "") {
        let params = `q=${props.keywords.replace(" ", "+")}${props.categories}&${props.sort_by}&fields=items(volumeInfo(title,authors,categories,imageLinks,description),id)`
        fetch(`https://www.googleapis.com/books/v1/volumes?${params}`)
        .then((response) => response.json())
        .then((json) => props.setBooks(json.items.map(function(item){
            let template = {
                id: "",
                authors: [],
                title: "",
                description: "",
                categories: [],
                imageLinks: {
                    smallThumbnail: "",
                    thumbnail: ""
                }
            }
            let result = {...template, ...item.volumeInfo}
            result.id =  item.id
            return result
        })));
        //props.setBooks(json.items.map(items=>items.volumeInfo)))
    }
}

function SearchInput(props){
    return (
        <div className={classes.searchInput}>
            <input
                    value={props.keywords}
                    onChange={event=>props.setKeyWords(event.target.value)}
                    onKeyUp={function(event){
                        if (event.key === 'Enter'){
                            GetBooksFromBase(props)
                        }
                    }} 
                    className={classes.searchinput}/>
            <button 
                    onClick={event=>{GetBooksFromBase(props)}}
                    className={classes.searchbutton}>
                    <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>   
    )
}

export default SearchInput