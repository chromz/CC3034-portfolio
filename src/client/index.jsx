// @flow

import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

const preloadedState = window.PRELOADED_STATE;

delete window.PRELOADED_STATE;

const store = configureStore(preloadedState);
const root = document.getElementById('root');

if (root && store) {
  hydrate(
    <Root store={store} />,
    root,
  );
}
