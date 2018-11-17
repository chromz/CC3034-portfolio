// @flow

import { createStore } from 'redux';

import portfolioReducer from './reducers';

const configureStore = (preloadedState: Object) => {
  const store = createStore(
    portfolioReducer,
    preloadedState,
  );
  return store;
};


export default configureStore;
