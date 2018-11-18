// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';
import SkillBar from '../SkillBar';
import cmatrix from '../../static/cmatrix_blur.png';

const Header = styled.header`
  width: 100%;
  text-align: center;
  color: white;
  & > h1 {
    font-size: 3em;
  }
`;

const InfoSection = styled.section`
  flex-grow: 1;
  display: flex;
  width: 100%;
  color: white;
`;


const Decorator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  right: 0;
  bottom: 0;
  border-bottom: 200px solid white;
  border-left: 200px solid transparent;
`;

const DecoratorTopLeft = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-top: 200px solid white;
  border-right: 200px solid transparent;
`;

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 1.2em;
  font-weight: bold;
`;

const SkillTable = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;


const Skills = () => (
  <ParallaxSection size={60} height={200} bgImage={cmatrix}>
    <Header>
      <h1>Skills</h1>
    </Header>
    <InfoSection>
      <SkillWrapper>
        <SkillTable>
          <SkillBar label="React" amnt={40} />
          <SkillBar label="Angular 1.x" amnt={70} />
          <SkillBar label="Go" amnt={70} />
          <SkillBar label="Javascript" amnt={70} />
          <SkillBar label="C++" amnt={65} />
          <SkillBar label="Python" amnt={50} />
          <SkillBar label="Java" amnt={50} />
        </SkillTable>
      </SkillWrapper>
      <Decorator />
      <DecoratorTopLeft />
    </InfoSection>
  </ParallaxSection>
);

export default Skills;
