// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';
import linkedin from '../../static/linkedin.png';

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
`;

const Article = styled.article`
  display: flex;
  width: 100%;
  color: #777;
  & > p {
    flex-grow: 2;
    height: 100%;
    font-size: 1.2em;
    padding-right: 200px;
  }
`;

const Networks = styled.aside`
  width: 300px;
  margin-right: 20px;
  height: 100%;
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  & > h3 {
    width: 100%;
    text-align: center;
  }
`;

const GithubImg = styled.img`
  width: 64px;
  margin-right: 50px;
`;

const FbImg = styled.img`
  width: 32px;
  margin-top: -5px;
`;

const About = () => (
  <ParallaxSection id="about" size={40} color="white">
    <Header>
      <h1>About me</h1>
    </Header>
    <InfoSection>
      <Article>
        <Networks>
          <h3>Find me at:</h3>
          <a href="https://github.com/chromz">
            <GithubImg
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/rodrigo-custodio-855333162">
            <FbImg
              alt="LinkedIn"
              src={linkedin}
            />
          </a>
        </Networks>
        <p>
          Currently I am a computer science student at Universidad del Valle
          de Guatemala and part-time web developer at NahualVentures S,A. Linux
          enthusiast and crazy for computer science related stuff.
        </p>
      </Article>
    </InfoSection>
  </ParallaxSection>
);

export default About;
