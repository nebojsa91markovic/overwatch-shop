import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 10px;
  background-color: #fff;
  width: 80%;
  height: auto;
  z-index: 1000;
  border-radius: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  color: #f99b1e;
  margin-right: 150px;
  margin-left: 150px;
  transform: translate(-150px 150px);
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    margin-right: 70px;
    margin-left: 50px;
    transform: translate(-50px 50px);
  }

  @media only screen and (max-width: 650px) {
    margin-right: 25px;
    margin-left: 25px;
    transform: translate(-25px);
    font-size: 20px;
  }

  @media only screen and (max-width: 500px) {
    margin-right: 15px;
    margin-left: 10px;
    transform: translate(-15px);
    font-size: 16px;
  }
`;

export const Li = styled.li`
  display: inline-block;
  padding: 0 10px;
`;

export const A = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration-line: line-through;
    -webkit-text-decoration-line: line-through;
  }
`;
