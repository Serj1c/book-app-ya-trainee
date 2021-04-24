import React from 'react';
import styles from './Search.module.css';

export const Search: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <input type="text"/>
            <button className={styles.button}>Search</button>
        </div>
    )
}
