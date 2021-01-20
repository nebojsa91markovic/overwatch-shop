import styled from "styled-components";
const primaryColor = "#3a4052";
export const HeroesHeaderContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  padding: 5rem;
  transform: translate(-5rem);
  overflow: hidden;
  background: ${primaryColor}
    url("https://static.playoverwatch.com/img/scene/candy-5d74c9b93f.jpg")
    no-repeat center center/cover;

  /* background: ${primaryColor} url("https://traversymedia.com/downloads/cover.jpg")
    no-repeat center center/cover; */

  &:after {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
  }
`;

export const SectionBorder = styled.div`
  background-image: "https://static.playoverwatch.com/img/dividers/wing-7e5e1efed2.png";
  height: 3rem;
`;

export const H1 = styled.h1`
  color: #4b535d;
  font-size: 3.5rem;
  z-index: 10;
  text-transform: uppercase;
  margin-bottom: 20px;

  &:before {
    bottom: 100%;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background-size: auto 100%;
    background-position: no-repeat;
    z-index: 10;
  }
`;

export const P = styled.p`
  font-size: 1.5rem;
  width: 50%;
  text-align: center;
  line-height: 50px;
`;
