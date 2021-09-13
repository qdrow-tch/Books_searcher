import React from "react";
import classes from './InputSrch.module.css';

async function GetBooksFromBase(props) {
    if (props.keywords != "") {
        let params = `q=${props.keywords}${props.categories}&${props.sort_by}&fields=items(volumeInfo(title,authors,categories,imageLinks,description))`
        fetch(`https://www.googleapis.com/books/v1/volumes?${params}`)
        .then((response) => response.json())
        .then((json) => props.setBooks(json.items.map(function(item){
            let template = {
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
                    className={classes.searchinput}/><button 
                    onClick={event=>{GetBooksFromBase(props)}}
                    className={classes.searchbutton}>Send
            </button>
        </div>   
    )
}

export default SearchInput