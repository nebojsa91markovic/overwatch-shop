import React, { useEffect, useRef } from "react";
import { FaStar, FaArrowLeft, FaHeart } from "react-icons/fa";
import "./style.css";
import cartStore from "../../Store/CartStore";
import { figureAdd } from "../../Reducer/actionsCreator";
import * as Elem from "../../Elements/Article";
const defaultRoute = process.env.PUBLIC_URL + "/images/New Folder/";

const Figures = ({
  changeImg,
  setIsLiked,
  isLiked,
  showStory,
  handleRating,
  isStory,
  pic,
  activeHero,
}) => {
  const allFigures = () => {
    let arrAll = [];
    activeHero.figures.forEach((element) => {
      arrAll.push(element);
    });
    return arrAll;
  };
  allFigures();

  const parentDiv = useRef();

  const createDomElem = (index) => {
    const short = activeHero.figures[index];
    const aTag = document.createElement("a");
    const setFirstImg = document.createElement("img");
    setFirstImg.src = `${defaultRoute}${short.name}.png`;
    setFirstImg.alt = activeHero.name;
    setFirstImg.id = activeHero.id;
    setFirstImg.setAttribute("figureIndex", index);
    setFirstImg.onclick = (event) => {
      changeImg(event.target);
    };
    setFirstImg.setAttribute("price", short.price);
    aTag.append(setFirstImg);
    changeImg(setFirstImg);
    const { current } = parentDiv;
    current !== undefined && current.append(aTag);
  };

  const getPrice = () => {
    if (pic !== "") return pic.getAttribute("price");
  };

  useEffect(() => {
    parentDiv.current.innerHTML = "";
    activeHero.figures.forEach((figure, index) => {
      createDomElem(index);
    });
  }, [activeHero]);

  return (
    <div className="container">
      <div className="card">
        <Elem.Content1
          className="content-1"
          contentName={activeHero.name.toUpperCase()}
        >
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
          <div className="main-image">
            <img id="remote" src={pic.src} alt="Ana" />
          </div>
        </Elem.Content1>
        {/* figures start */}
        <div className="content-2">
          <div className="sub-image" ref={parentDiv}></div>
        </div>

        <div className="content-3">
          <div className="branding">
            <span>Overwatch Ana Funko Pop! Vinyl</span>
            <div className="ratings">
              <span>
                <FaStar
                  className="fa-star"
                  onClick={(event) => handleRating(event.target.parentNode)}
                />
              </span>
              <span>
                <FaStar
                  className="fa-star"
                  onClick={(event) => handleRating(event.target.parentNode)}
                />
              </span>
              <span>
                <FaStar
                  className="fa-star"
                  onClick={(event) => handleRating(event.target.parentNode)}
                />
              </span>
              <span>
                <FaStar
                  className="fa-star"
                  onClick={(event) => handleRating(event.target.parentNode)}
                />
              </span>
              <span>
                <FaStar
                  className="fa-star"
                  onClick={(event) => handleRating(event.target.parentNode)}
                />
              </span>
            </div>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <span>Read More</span>
              </p>
            </div>
            <div className="price">
              <span>$</span>
              <span>{getPrice()}</span>
              <div className="space"></div>
              <button
                onClick={() => {
                  cartStore.dispatch(
                    figureAdd(pic.getAttribute("figureIndex"), 1, pic.alt)
                  );
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* figures end */}
      </div>
    </div>
  );
};

export default Figures;
