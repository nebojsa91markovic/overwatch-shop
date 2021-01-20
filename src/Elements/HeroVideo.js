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
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  overflow: hidden;
  padding: 100px;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${primaryColor}
    url("https://static.playoverwatch.com/img/scene/candy-5d74c9b93f.jpg")
    no-repeat center center/cover;

  /* background: ${primaryColor} url("https://traversymedia.com/downloads/cover.jpg")
    no-repeat center center/cover; */
  padding-top: 150px;
  padding-bottom: 100px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
  right: 0%;
  margin-bottom: 50px;
`;

export const BckImage = styled.img`
  min-width: 90%;
  min-height: 90%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
  right: 0%;
`;
