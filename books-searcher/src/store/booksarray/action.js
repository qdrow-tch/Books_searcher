export const PUSH_BOOKS = 'PUSH_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';
export const CLEAR_BOOKS_ARRAY = 'CLEAR_BOOKS_ARRAY';


// [export const OTHER_NAME_ACTION = 'const OTHER_NAME_ACTION';] ....


export const pushBooks = value => ({
    type: PUSH_BOOKS,
    payload: value
})

export const setBooks = value => ({
    type: SET_BOOKS,
    payload: value
})

export const clearBooksArray = () => ({
    type: CLEAR_BOOKS_ARRAY,
})
// [export const setOtherNameValue = value => ({
//     type: OTHER_NAME_ACTION,
//     payload: value
// });]
// ....