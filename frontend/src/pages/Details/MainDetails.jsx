import React from "react";
import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ReturnList from "./ReturnList";

function MainDetails() {
  return (
    <div>
      <ReturnList />
      <Recipe />
      <Commentaire />
    </div>
  );
}

export default MainDetails;
