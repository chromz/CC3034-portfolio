// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';

const Header = styled.header`
  width: 100%;
  text-align: center;
  color: #777;
  & > h1 {
    font-size: 3em;
  }
`;

const InfoSection = styled.section`
  flex-grow: 1;
  display: flex;
  width: 100%;
  color: #777;
`;


const Decorator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  right: 0;
  bottom: 0;
  border-bottom: 200px solid #777;
  border-left: 200px solid transparent;
`;

const DecoratorTopLeft = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-top: 200px solid #777;
  border-right: 200px solid transparent;
`;

const Projects = () => (
  <ParallaxSection size={60} color="white">
    <Header>
      <h1>Projects</h1>
    </Header>
    <InfoSection>
      <Decorator />
      <DecoratorTopLeft />
    </InfoSection>
  </ParallaxSection>
);

export default Projects;
