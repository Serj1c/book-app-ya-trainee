import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from 'components';

export const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}
