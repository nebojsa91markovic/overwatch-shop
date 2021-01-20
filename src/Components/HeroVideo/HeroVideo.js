import React from "react";
import * as Elem from "../../Elements/HeroVideo";
import Article from "../Article/Article";

const videoRoute = "/videos/";
const imageRoute = "../../images/background/";

const HeroVideo = ({ activeHero, isStory, setIsStory }) => {
  const video = videoRoute + activeHero.name + ".mp4";
  const image = imageRoute + activeHero.name + "-background-story.png";
  return (
    <Elem.LandingVideo className="showcase" id="shop">
      <Elem.VideoContainer className="video-container">
        <Article
          activeHero={activeHero}
          isStory={isStory}
          setIsStory={setIsStory}
        />
        {isStory ? (
          <Elem.BckImage src={image} />
        ) : (
          <Elem.Video src={video} type="video/mp4" autoPlay muted loop s />
        )}
      </Elem.VideoContainer>
    </Elem.LandingVideo>
  );
};

export default HeroVideo;
