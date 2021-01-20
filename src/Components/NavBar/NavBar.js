import React from "react";
import * as Elem from "../../Elements/NavBar";
const NavBar = () => {
  return (
    <Elem.Nav id="home">
      <Elem.Ul>
        <Elem.Li>
          <Elem.A href="#home">Home</Elem.A>
        </Elem.Li>
        <Elem.Li>
          <Elem.A href="#heroes">Heroes</Elem.A>
        </Elem.Li>
        <Elem.Li>
          <Elem.A href="#shop">Shop</Elem.A>
        </Elem.Li>
        <Elem.Li>
          <Elem.A href="#copyright">About</Elem.A>
        </Elem.Li>
      </Elem.Ul>
    </Elem.Nav>
  );
};

export default NavBar;
