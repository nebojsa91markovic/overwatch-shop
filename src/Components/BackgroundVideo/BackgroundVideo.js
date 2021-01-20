import React from "react";
import * as Elem from "../../Elements/LandingVideo";
import OverwatchTrailer from "./overwatchTrailer.mp4";
import Logo from "../../Svg/overwatch.svg";
import { PS4, Xbox, PC, Switch } from "../../Svg/";
const BackgroundVideo = () => {
  return (
    <Elem.LandingVideo className="showcase">
      <Elem.VideoContainer className="video-container">
        <Elem.Video src={OverwatchTrailer} autoPlay muted loop />
      </Elem.VideoContainer>
      <Elem.Content className="content">
        <Elem.Img src={Logo} alt="logo" />
        <Elem.SvgWrapper>
          <PC />
          <PS4 />
          <Xbox />
          <Switch />
        </Elem.SvgWrapper>
        <Elem.A href="#shop" className="btn">
          Shop Now
        </Elem.A>
      </Elem.Content>
    </Elem.LandingVideo>
  );
};

export default BackgroundVideo;
