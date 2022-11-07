import React from "react";
import Intro from "./Intro";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Editorial() {
  return (
    <div className="editorial">
      <Intro />

      <h1 className="linedTitle">
        <span className="linedTitle__text">Découvrez, shakez et dégustez</span>
      </h1>

      <Section1 />

      <Section2 />

      <Section3 />

      <div>Listlink</div>
    </div>
  );
}

export default Editorial;
