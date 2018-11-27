// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';
import bgImage from '../../static/code_blur.png';

const BioImage = styled.img`
  width: 250px;
  border-radius: 50%;
`;

const Bio = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const TextWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  color: #777;
  text-align: center;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
`;

const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin: 0;
`;

const Subtitle = styled.p`
  font-style: italic;
`;

const Nav = styled.nav`
  color: white;
  width: 100%;
`;

const List = styled.ol`
  font-size: 2em;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  & a {
    text-decoration: none;
    color: white;
  }
`;

const Intro = () => (
  <ParallaxSection size={100} bgImage={bgImage}>
    <Bio>
      <ImageWrapper>
        <BioImage
          alt="Profile"
          src="https://avatars0.githubusercontent.com/u/8508965?s=460&v=4"
        />
      </ImageWrapper>
      <TextWrapper>
        <Title>Rodrigo Custodio</Title>
        <Subtitle>Computer Science Student</Subtitle>
      </TextWrapper>
      <Nav>
        <List>
          <Item>
            <a href="#about">About me</a>
          </Item>
          <Item>
            <a href="#skills">Skills</a>
          </Item>
          <Item>
            <a href="#projects">Projects</a>
          </Item>
          <Item>
            <a href="#tools">What&#39;s on my PC</a>
          </Item>
        </List>
      </Nav>
    </Bio>
  </ParallaxSection>
);

export default Intro;
