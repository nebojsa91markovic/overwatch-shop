import React, { useState, useEffect } from "react";
import Figures from "./Figures";
import Story from "./Story";

import "./style.css";
const Article = ({ activeHero, isStory, setIsStory }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [pic, setPic] = useState("");

  const changeImg = (image) => {
    setPic(image);
    const container = document.getElementById("remote");
    container.src = image.src;
  };

  const handleRating = (span) => {
    const getParent = Array.from(document.querySelector(".ratings").children);
    const index = getParent.findIndex((n) => n === span.parentNode);

    for (let i = 0; i < getParent.length; i++) {
      i <= index
        ? (getParent[i].classList = "fa-star activeRating")
        : (getParent[i].classList = "fa-star");
    }
  };

  const showStory = () => {
    setIsStory(!isStory);
  };

  useEffect(() => {
    const setFirstImg = document.createElement("img");
    setFirstImg.src = "/static/media/ana-figure.52634e05.png";
    setFirstImg.alt = activeHero.name;
    setFirstImg.id = activeHero.id;
    setFirstImg.setAttribute("price", activeHero.figures[0].price);
    changeImg(setFirstImg);
  }, []);

  return (
    <div>
      {!isStory ? (
        <Figures
          activeHero={activeHero}
          isLiked={isLiked}
          setIsLiked={setIsStory}
          showStory={showStory}
          changeImg={changeImg}
          handleRating={handleRating}
          isStory={isStory}
          pic={pic}
        />
      ) : (
        <Story
          isLiked={isLiked}
          setIsLiked={setIsStory}
          showStory={showStory}
          isStory={isStory}
          activeHero={activeHero}
        />
      )}
    </div>
  );
};

export default Article;
