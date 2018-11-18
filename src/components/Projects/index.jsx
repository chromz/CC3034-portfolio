// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';

const Header = styled.header`
  width: 100%;
  z-index: 2;
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
  justify-content: center;
`;

const DecoratorTopLeft = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  z-index: 0;
  border-top: 200px solid transparent;
  border-right: 200px solid white;
  box-shadow: 0px 0px 0px 4000px white;
`;

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  z-index: 1;
  flex-direction: column;
  border: 2px solid #777;
  padding: 30px;
  max-height: 240px;
  overflow: auto;
`;

const Project = styled.li`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  min-height: 40px;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: bold;
  background-color: #777;
  color: white;
  padding: 10px;
`;

const ToLink = styled.a`
  text-decoration: none;
  & img {
    width: 32px;
    margin-left: 30px;
  }
`;

const Projects = () => (
  <ParallaxSection id="projects" size={60} color="transparent">
    <Header>
      <h1>Projects</h1>
    </Header>
    <InfoSection>
      <ProjectList>
        <Project>
          <Label>
            Piercy
          </Label>
          <ToLink href="https://github.com/chromz/Piercy">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
        <Project>
          <Label>
            CC3034-boilerplate
          </Label>
          <ToLink href="https://github.com/chromz/CC3034-boilerplate">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
        <Project>
          <Label>
            CC3034-lab8
          </Label>
          <ToLink href="https://github.com/chromz/CC3034-lab8">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
        <Project>
          <Label>
            CC3034-lab7
          </Label>
          <ToLink href="https://github.com/chromz/CC3034-lab7">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
        <Project>
          <Label>
            CC3034-lab6
          </Label>
          <ToLink href="https://github.com/chromz/CC3034-lab6">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
        <Project>
          <Label>
            CC3034-lab5
          </Label>
          <ToLink href="https://github.com/chromz/CC3034-lab5">
            <img
              alt="Github"
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            />
          </ToLink>
        </Project>
      </ProjectList>
      <DecoratorTopLeft />
    </InfoSection>
  </ParallaxSection>
);

export default Projects;
