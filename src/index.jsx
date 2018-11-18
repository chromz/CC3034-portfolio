// @flow

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';


const root = document.getElementById('root');

if (root) {
  render(
    <Root />,
    root,
  );
}
