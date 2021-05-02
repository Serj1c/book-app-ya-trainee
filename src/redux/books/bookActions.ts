import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./bookTypes";

export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
};

export const fetchBooksSuccess = (books: Array<Object>) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
};

export const fetchBooksFailure = (error: any) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
};