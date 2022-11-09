import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ListLink from "../../components/ListLink";

function MainDetails() {
  return (
    <main className="mainDetails">
      <Recipe />
      <div className="listLinkDetails">
        <ListLink />
      </div>
      <Commentaire />
    </main>
  );
}

export default MainDetails;
