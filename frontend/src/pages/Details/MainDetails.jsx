import React from "react";
import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ReturnList from "./ReturnList";

function MainDetails() {
  return (
    <main className="mainDetails">
      <ReturnList />
      <Recipe />
      <Commentaire />
    </main>
  );
}

export default MainDetails;
