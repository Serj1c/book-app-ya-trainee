import React from 'react';
import styles from './Book.module.css';

interface Props {
    book: any
}

export const Book: React.FunctionComponent<Props> = ({ book }): JSX.Element => {
    return (
        <div className={styles.card}>
            <img src={`http://covers.openlibrary.org/b/isbn/0385472579-S.jpg`} alt="thumbnail"/>
            <h3>{book.title}</h3>
            <span>{book.author_name}</span>
        </div>
    )
}
