// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }

  div#root {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const MainFrame = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;


const PortfolioApp = () => (
  <MainFrame>
    <GlobalStyle />
  </MainFrame>
);

export default PortfolioApp;
