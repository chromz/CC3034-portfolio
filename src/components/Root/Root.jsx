// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PortfolioApp from '../PortfolioApp';


// Component is a class to resolve Reac hot loader bug
const Root = () => (
  <Router>
    <PortfolioApp />
  </Router>
);

export default Root;
