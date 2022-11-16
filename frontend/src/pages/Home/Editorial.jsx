import React from "react";
import Intro from "./Intro";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ListLink from "../../components/ListLink";
import DoubleLink from "./DoubleLink";

function Editorial() {
  return (
    <div className="edito containerType1">
      <Intro />

      <div className="edito__wrappLink">
        <ListLink />
      </div>

      <h2 className="linedTitle">
        <span className="linedTitle__text">Découvrez, shakez et dégustez</span>
      </h2>

      <Section1 />
      <Section2 />
      <Section3 />

      <DoubleLink />
    </div>
  );
}

export default Editorial;
