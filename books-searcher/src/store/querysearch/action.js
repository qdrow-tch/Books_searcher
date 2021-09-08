export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_QUANTITY_VALUE = 'SET_QUANTITY_VALUE';
export const SET_ITEM_INDEX = 'SET_ITEM_INDEX';
export const SET_KEY_WORDS = 'SET_KEY_WORDS';


export const setCategories = value => ({
    type: SET_CATEGORIES,
    payload: value,
})

export const setSortByName = value => ({
    type: SET_SORT_BY,
    payload: value,
})

export const setQuantity = value => ({
    type: SET_QUANTITY_VALUE,
    payload: value,
})

export const setItemIndex = value => ({
    type: SET_ITEM_INDEX,
    payload: value,
})

export const setKeyWords = value => ({
    type: SET_KEY_WORDS,
    payload: value,
})