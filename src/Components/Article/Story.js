import React from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

const Story = ({ setIsLiked, isLiked, showStory, isStory, activeHero }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="content-1 ">
          <span className="arrow-left">
            <FaArrowLeft />
          </span>
          <span className="story" onClick={showStory}>
            {isStory ? "Figures" : "Story"}
          </span>
          <span className="like" onClick={() => setIsLiked(!isLiked)}>
            <FaHeart
              className={`fa-heart ${(isLiked && "liked") || ""}`}
              aria-hidden="true"
            />
          </span>
        </div>
        <div className="content-4">
          <ul>
            <li>
              <span>Real Name:</span> {activeHero.fullName}
            </li>
            <li>
              <span>Occupation:</span> {activeHero.occupation}
            </li>
            <li>
              <span>Base of Operations:</span> {activeHero.baseOfOperations}
            </li>
            <li>
              <span>Affiliation:</span> {activeHero.affiliation}
            </li>
          </ul>
          <h3>{activeHero.quote}</h3>
          <div className="story-paragraph">
            <p>{activeHero.biography}</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Story;
