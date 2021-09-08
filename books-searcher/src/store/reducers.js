import { combineReducers } from 'redux';
import { changeBooksReducer } from './booksarray/reducers';
import { configurateQuery } from './querysearch/reducers';


export default combineReducers({
    changeBooksArray: changeBooksReducer,
    configQuery: configurateQuery,
});

