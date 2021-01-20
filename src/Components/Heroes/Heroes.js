import React, { useState } from "react";
import * as Elem from "../../Elements/Heroes";
import HeroIconWrapper from "../HeroIconWrapper/HeroIconWrapper";
const Heroes = ({ getHero, activeHero, setActiveHero }) => {
  const [show, setShow] = useState(false);

  return (
    <Elem.HeroesContainer id="heroes">
      <Elem.SectionBorder />
      <Elem.H1>Select Hero</Elem.H1>
      <HeroIconWrapper
        show={show}
        setShow={setShow}
        setActiveHero={setActiveHero}
        activeHero={activeHero}
        getHero={getHero}
      />
      <Elem.SectionBorder />
    </Elem.HeroesContainer>
  );
};

export default Heroes;
