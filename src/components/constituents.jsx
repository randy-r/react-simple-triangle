// import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const RatioKeeper = styled.div`
  margin-top: 115.47%;
`;

export const SidesContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const createGlow = color =>
  (!color ? '' : `
    box-shadow:
      rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 20px,
      rgb(255, 255, 255) 0px 0px 30px, ${color} 0px 0px 40px,
      ${color} 0px 0px 70px, ${color} 0px 0px 80px,
      ${color} 0px 0px 100px, ${color} 0px 0px 150px;
  `);

const getSideStyle = (color, glowColor) => {
  return `
    position: absolute;
    width: 4%;
    height: 100%;
    border-radius: 20px;
    background: ${color || 'rgb(255,255,255)'}; 
    ${createGlow(glowColor)}
  `;
};

export const SideA = styled.div`
  ${props => getSideStyle(props.color, props.glowColor)}
  left: 48%;
  top: -24.5%;
  transform: rotate(-60deg)
`;

export const SideB = styled.div`
  ${props => getSideStyle(props.color, props.glowColor)}
`;

export const SideC = styled.div`
  ${props => getSideStyle(props.color, props.glowColor)}
  left: 48%;
  top: 24.5%;
  transform: rotate(60deg);
`;

export const ClickPanel = styled.div`
  width:100%;
  height:100%;
  top: 0;
  position: absolute;
  cursor: pointer;
`;
