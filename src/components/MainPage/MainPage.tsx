import React from 'react';
import { Header, ListOfBooks, Search } from 'components';

export const MainPage: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Search />
            <ListOfBooks />
        </div>
    )
}
