import ListLink from "../../components/ListLink";

function LandingBox() {
  return (
    <div className="landingBox">
      <div className="landingBox__square">
        <h1 className="landingBox__title">
          <span>L'art du</span>
          <span className="landingBox__title__big">Cocktail</span>
        </h1>
        <ListLink />
      </div>
    </div>
  );
}

export default LandingBox;
