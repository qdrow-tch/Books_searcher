import { combineReducers } from 'redux';
import { nameReducer } from './template/reducers';

export default combineReducers({
    keyNameReducer: nameReducer,
    //  [key: Reducer,]...
    //key - name New Reducer
    //Reducer - link to New Reduser from store
});

