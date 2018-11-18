// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  size: number,
  height?: number,
  bgImage?: string,
  color?: string,
  children?: React.Node,
};


const layerCss = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Parallax = styled.section`
  position: relative;
${
  ({ size }) => `height: ${size}vh;`
}
  transform-style: preserve-3d;
`;

const Background = styled.div`
${
  ({ bgImage, color, height }) => {
    let bgCss = '';
    if (bgImage) {
      bgCss += `background-image: url(${bgImage});\n`;
    }
    if (color) {
      bgCss += `background-color: ${color};\n`;
    }
    if (height) {
      bgCss += `height: ${height}%;\n`;
    }
    return bgCss;
  }
}
  ${layerCss}
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Base = styled.div`
  ${layerCss}
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


const ParallaxSection = ({ children, size, ...rest }: Props) => (
  <Parallax size={size}>
    <Background {...rest} />
    <Base>
      {children}
    </Base>
  </Parallax>
);

ParallaxSection.defaultProps = {
  children: undefined,
  color: undefined,
  bgImage: undefined,
  height: undefined,
};

export default ParallaxSection;
