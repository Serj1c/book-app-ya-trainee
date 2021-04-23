import React from 'react';
import { Header, Container, Search } from 'components';

export const MainPage: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Search />
            <Container />
        </div>
    )
}
