import React from 'react';
import styles from './ListOfBooks.module.css';

export const ListOfBooks: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <h2>I am a container</h2>
        </div>
    )
}
