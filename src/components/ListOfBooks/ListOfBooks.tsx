import React from 'react';
import { useSelector } from 'react-redux';
import { Book } from 'components';
import { v4 as uuidv4 } from 'uuid';
import styles from './ListOfBooks.module.css';

export const ListOfBooks: React.FunctionComponent = () : JSX.Element => {

    const books = useSelector((state: any) => state.book.books.docs);
    console.log(books);

    return (
        <div className={styles.root}>
            { books ? books.map((book: any) => (
                <Book key={uuidv4()} book={book} />
            )) : <h2>Nothing to show yet</h2> }
            
        </div>
    )
};