import styled from "styled-components";

/*
svetlo siva #c1d4ec34
plava rgb(49, 108, 185)
malo svetlija plava #0b67df
sucmurasta svetlo zeleno rgb(230, 244, 244)
sivo-crna rgb(70, 70, 70) !
narandzasta #fcba26
*/
export const ArticleContainer = styled.div`
  position: relative;
  z-index: inherit;
  left: 5%;
  top: 50%;
  transform: translate(5%, -50%);
  width: 30%;
  height: inherit;
  border: 1px solid black;
  background: rgba(230, 244, 244, 0.4);
  border-radius: 55px;
  overflow: hidden;
`;
export const Card = styled.div`
  position: relative;
`;

export const Content1 = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  background-image: linear-gradient(
    to bottom right,
    rgba(10, 82, 175, 0.8),
    rgba(18, 112, 234, 0.8)
  );

  &:after {
    content: "${(props) => props.contentName} ";
    position: absolute;
    display: inline;
    left: 3%;
    top: 20%;
    font-size: 5.5em;
    font-weight: 800;
    color: #c1d4ec34;
    -webkit-text-fill-color: rgba(49, 108, 185, 0.231);
    -webkit-text-stroke-width: 2px;
  }
`;

export const ArrowLeft = styled.span`
  position: absolute;
  top: 8%;
  left: 6%;
  color: #e2e2e2;
  font-size: 20px;
  cursor: pointer;
`;

export const Heart = styled.span`
  position: absolute;
  top: 8%;
  right: 6%;
  color: #e2e2e2;
  font-size: 20px;
  cursor: pointer;
  display: block;

  .fa-heart {
    transition: ease-out 0.5s;
  }

  .liked {
    color: #ee5a5a;
  }
`;

export const MainImgDiv = styled.div`
  border: 1px solid red;
`;

export const MainImg = styled.img`
  width: 50%;
  position: relative;
  top: 50%;
  left: 25%;
  transform: translate(-50%);
  z-index: 100;
`;

export const Content2 = styled.div`
  height: 120px;
  position: relative;
`;

export const SubImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubImg = styled.img`
  display: block;
  width: 50%;
  height: 0%;
  margin: 50% 7px 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -10px -10px 10px rgba(230, 244, 244, 0.5),
    5px 5px 5px rgba(70, 70, 70, 0.12);
  cursor: pointer;
  border: 1.5px solid #fff;
`;
