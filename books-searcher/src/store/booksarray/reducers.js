import { SET_BOOKS, PUSH_BOOKS, CLEAR_BOOKS_ARRAY } from "./action";


const defaultState = {
    bookslist: [],
    domore:  false,
}

export const changeBooksReducer = (state = defaultState, action) => {
    switch(action.type){  
        case PUSH_BOOKS:
            return {...state, bookslist: [...state.bookslist, ...action.payload] };
        case SET_BOOKS:
            return {...state, bookslist: action.payload}
        case CLEAR_BOOKS_ARRAY:
            return state.bookslist=[];
        default:  
            return state;
        // [case OTHER_NAME_ACTION:
        //     return {
        //         ...state, 
        //         otherKeyName: action.OTHER_NAME_ACTION
        //     };] ....
    }
    
};

