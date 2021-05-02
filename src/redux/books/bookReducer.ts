import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./bookTypes";

export const initialState = {
    isLoading: false,
    books: [],
    error: '',
    
};

export const bookReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case FETCH_BOOKS_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                isLoading: false,
                books: action.payload,
                error: ''
            }
        case FETCH_BOOKS_FAILURE:
            return {
                isLoading: false,
                books: [],
                error: action.payload
            }
        default: return state
    }
};