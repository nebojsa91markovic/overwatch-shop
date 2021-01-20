import styled from "styled-components";

const primaryColor = "#3a4052";

export const LandingVideo = styled.section`
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  .h1 {
    font-weight: 300;
    font-size: 60px;
    line-height: 1.2;
    margin-bottom: 50px;
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${primaryColor}
    url("https://static.playoverwatch.com/img/pages/home/header-video-poster-mobile-0443ef2d5e.jpg")
    no-repeat center center/cover;

  /* background: ${primaryColor} url("https://traversymedia.com/downloads/cover.jpg")
    no-repeat center center/cover; */

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  z-index: 3;
  color: #fff;
`;

export const H1 = styled.h1`
  font-weight: 300;
  font-size: 80px;
  line-height: 1.2;
  margin-bottom: 50px;
`;

export const H3 = styled.h3`
  font-weight: 300;
  font-size: 40px;
`;

export const A = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  padding: 10px 30px;
  background: rgba(58, 64, 82, 0.6);
  border: 1px #fff solid;
  border-radius: 5px;
  margin-top: 25px;

  :hover {
    transform: scale(0.98);
    background-color: #f99b1e;
  }
  :visited {
    text-decoration: inherit;
  }
`;

export const Img = styled.img`
  width: 50%;
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 34px;
  margin-top: 1rem;
  margin-right: 70px;
  fill: #fff;
  transform: scale(0.6);
  svg {
    padding: 10px 30px;
  }

  .svg-pc {
  }
`;
