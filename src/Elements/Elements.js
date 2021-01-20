import styled from "styled-components";

/*
svetlo siva #c1d4ec34
plava rgb(49, 108, 185)
malo svetlija plava #0b67df
sucmurasta svetlo zeleno rgb(230, 244, 244)
sivo-crna rgb(70, 70, 70) !
narandzasta #fcba26
*/
export const NavBarContainer = styled.nav`
  background-color: rgb(70, 70, 70);
  display: flex;
  flex-direction: row-reverse;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  .logo {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  #logo {
    height: 70%;
    padding: 5%;
    margin-left: 20px;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  font-size: 24px;
  margin-right: 5rem;
  li {
    display: inline-block;
    padding: 10px 15px;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;
