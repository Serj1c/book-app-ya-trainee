import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import { fetchBooksByTitle } from 'redux/utils';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from 'redux/books/bookActions';

export const Search: React.FunctionComponent = (): JSX.Element => {

    const [searchItem, setSearchItem] = useState<string>("");
    const dispatch = useDispatch();

    const fetchBooksHandler = async () => {
        dispatch(fetchBooksRequest);
        const fetchedBooks: any = await fetchBooksByTitle(searchItem);
        fetchedBooks ? dispatch(fetchBooksSuccess(fetchedBooks)) : dispatch(fetchBooksFailure);
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchItem(event.target.value)
    }

    return (
        <div className={styles.root}>
            <input type="text" value={searchItem} onChange={onChangeHandler} className={styles.input}/>
            <button className={styles.button} onClick={fetchBooksHandler}>Search</button>
        </div>
    )
}