// @flow

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Tools from '../Tools';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora');
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Lora', serif;
  }

  div#root {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const MainFrame = styled.main`
  perspective: 1px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const PortfolioApp = () => (
  <MainFrame>
    <GlobalStyle />
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Tools />
  </MainFrame>
);

export default PortfolioApp;
