import React from "react";
import * as Elem from "../../Elements/HeroIcon";
import HeroVideo from "../HeroVideo/HeroVideo";
import data from "../../HeroData/data";

const allHeroes = data;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeroIconWrapper = ({ show, setShow, getHero }) => {
  const selectHero = (id) => {
    getHero(id);
  };
  return (
    <Elem.HeroSection>
      <Elem.HeroWrapper variants={container} initial="hidden" animate="visible">
        {allHeroes.map((hero) => {
          return (
            <Elem.Icon
              key={hero.id}
              variants={item}
              onClick={() => selectHero(hero.id)}
            >
              {show ? <HeroVideo setShow={setShow} /> : ""}
              <Elem.Img
                src={`../../OverwatchCharacters/${hero.name}-icon.png`}
                alt={`${hero.name}-icon`}
              />
              <span>{hero.name}</span>
            </Elem.Icon>
          );
        })}
      </Elem.HeroWrapper>
    </Elem.HeroSection>
  );
};

export default HeroIconWrapper;
