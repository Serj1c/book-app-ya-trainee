import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ListOfBooks.module.css';

export const ListOfBooks: React.FunctionComponent = () : JSX.Element => {

    const books = useSelector((state) => state);
    console.log(books);

    return (
        <div className={styles.root}>
            <h2>I am a just a container</h2>
        </div>
    )
};