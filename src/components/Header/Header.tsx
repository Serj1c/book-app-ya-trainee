import React from 'react';
import styles from './Header.module.css';

export const Header: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <span className={styles.left}>Bookly</span>
            <span className={styles.right}>Find something to read while in the lockdown</span>
        </div>
    )
}
