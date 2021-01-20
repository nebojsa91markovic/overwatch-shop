import React from "react";
import * as Elem from "../../Elements/HeroesHeader";
const HeroesHeader = () => {
  return (
    <Elem.HeroesHeaderContainer>
      <Elem.H1>The world needs more heroes</Elem.H1>
      <Elem.P>
        Slow down time, rain destruction from above in a jet-powered armor suit,
        or pilot a superpowered hamster ball: In Overwatch, every hero has a
        unique set of devastating abilities.
      </Elem.P>
    </Elem.HeroesHeaderContainer>
  );
};

export default HeroesHeader;
