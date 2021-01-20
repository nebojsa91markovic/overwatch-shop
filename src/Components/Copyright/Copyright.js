import React from "react";
import * as Elem from "../../Elements/Copyright";
import { Blizzard, FunkPop } from "../../Svg";
import Background from "../../images/footer-bg.jpg";
const Copyright = () => {
  return (
    <Elem.Section id="copyright">
      <Elem.CopyrightContainer background={Background}>
        <Elem.H1>
          All trademarks referenced herein are the properties of their
          respective owners.
        </Elem.H1>
        <Blizzard />
        <FunkPop />
      </Elem.CopyrightContainer>
    </Elem.Section>
  );
};

export default Copyright;
