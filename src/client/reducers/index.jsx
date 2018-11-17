// @flow

import { combineReducers } from 'redux';
import portfolio from './portfolio';

const portfolioReducer = combineReducers({
  portfolio,
});

export default portfolioReducer;
