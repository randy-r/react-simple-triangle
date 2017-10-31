import React from 'react';
import {
  Wrapper, RatioKeeper, SideA,
  SideB, SideC, SidesContainer,
  ClickPanel,
} from './constituents';

const Triangle = ({ onClick, glowColor, color }) => (
  <Wrapper>
    <RatioKeeper />
    <SidesContainer >
      <SideB color={color} glowColor={glowColor} />
      <SideA color={color} glowColor={glowColor} />
      <SideC color={color} glowColor={glowColor} />
      {/*<SideB color={color} />
      <SideA color={color} />
      <SideC color={color} />*/}
    </SidesContainer>
    {onClick && <ClickPanel role="button" onClick={onClick} />}
  </Wrapper>
);

export default Triangle;
