import { SET_CATEGORIES, SET_SORT_BY, SET_QUANTITY_VALUE, SET_ITEM_INDEX, SET_KEY_WORDS } from "./action";


const defaultState = {
    categories: "",
    sort_by: "",
    quantity: 30,
    itemindex: 0,
    keywords: "",
}

export const configurateQuery = (state = defaultState, action) => {
    
    switch(action.type){  
        case SET_CATEGORIES:
            return {...state, categories: action.payload };
        case SET_SORT_BY:
            return {...state, sort_by: action.payload };
        case SET_QUANTITY_VALUE:
            return {...state, quantity: action.payload };
        case SET_ITEM_INDEX:
            return {...state, itemindex: action.payload };
        case SET_KEY_WORDS:
            return {...state, keywords: action.payload };
        default:  
            return state;
        
        // [case OTHER_NAME_ACTION:
        //     return {
        //         ...state, 
        //         otherKeyName: action.OTHER_NAME_ACTION
        //     };] ....
    }
    
};

