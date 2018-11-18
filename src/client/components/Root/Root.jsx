// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PortfolioApp from '../PortfolioApp';

type Props = {
  store: Object;
};


// Component is a class to resolve Reac hot loader bug
const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <PortfolioApp />
    </Router>
  </Provider>
);

export default hot(module)(Root);
