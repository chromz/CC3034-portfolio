// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PortfolioApp from '../PortfolioApp';


// Component is a class to resolve Reac hot loader bug
const Root = () => (
  <Router>
    <PortfolioApp />
  </Router>
);

export default hot(module)(Root);
