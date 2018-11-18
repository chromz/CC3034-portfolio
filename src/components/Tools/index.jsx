// @flow

import React from 'react';
import styled from 'styled-components';
import ParallaxSection from '../ParallaxSection';
import bg from '../../static/desk_blur.png';
import vim from '../../static/vim.png';
import suckless from '../../static/suckless.png';
import bspwm from '../../static/bspwm.png';
import arch from '../../static/arch.png';

const Header = styled.header`
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  & > h1 {
    font-size: 3em;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const InfoSection = styled.section`
  flex-grow: 1;
  display: flex;
  width: 100%;
  color: white;
  justify-content: center;
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

const ToolList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: center;
`;

const Tool = styled.li`
  list-style: none;
  & img {
    width: 128px;
  }
  width: 128px;
  background: rgba(255,255,255,0.6);
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const Tools = () => (
  <ParallaxSection id="tools" size={100} bgImage={bg}>
    <Header>
      <h1>What&#39;s on my PC</h1>
    </Header>
    <InfoSection>
      <ToolList>
        <Tool>
          <a
            href="https://www.vim.org/"
          >
            <img
              alt="Vim"
              src={vim}
            />
          </a>
        </Tool>
        <Tool>
          <a
            href="https://suckless.org/"
          >
            <img
              alt="Suckless ST"
              src={suckless}
            />
          </a>
        </Tool>
        <Tool>
          <a
            href="https://github.com/baskerville/bspwm"
          >
            <img
              alt="BSPWM"
              src={bspwm}
            />
          </a>
        </Tool>
        <Tool>
          <a
            href="https://www.archlinux.org/"
          >
            <img
              alt="Arch Linux"
              src={arch}
            />
          </a>
        </Tool>
      </ToolList>
      <DecoratorTopLeft />
    </InfoSection>
  </ParallaxSection>
);

export default Tools;
