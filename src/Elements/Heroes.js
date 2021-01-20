import styled from "styled-components";
const primaryColor = "#3a4052";
export const HeroesContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: ${primaryColor}
    url("https://static.playoverwatch.com/img/bg-tmp-hero-mobile-2b1dae2a18.jpg")
    no-repeat center center/cover;

  /* background: ${primaryColor} url("https://traversymedia.com/downloads/cover.jpg")
    no-repeat center center/cover; */

  &:after {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const SectionBorder = styled.div`
  background-image: "https://static.playoverwatch.com/img/dividers/wing-7e5e1efed2.png";
  height: 3rem;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-style: italic;

  &:before {
    bottom: 100%auto;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background-size: auto 100%;
    background-position: no-repeat;
    z-index: 10;
  }
`;
