import { NAME_ACTION_TAMPLATE } from "./action";

const defaultState = {
    keyName: "",
    //[otherKeyName: value,]....
};

export const nameReducer = (state = defaultState, action) => {
    switch(action.type){  
        case NAME_ACTION_TAMPLATE:
            return {
                ...state, 
                keyName: action.NAME_ACTION_TAMPLATE
            };
        // [case OTHER_NAME_ACTION:
        //     return {
        //         ...state, 
        //         otherKeyName: action.OTHER_NAME_ACTION
        //     };] ....
    }
    return state
};

