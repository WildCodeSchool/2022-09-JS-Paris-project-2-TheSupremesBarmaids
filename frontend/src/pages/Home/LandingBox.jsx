import ListLink from "../../components/ListLink";

function LandingBox() {
  return (
    <div className="landingBox">
      <div className="landingBox__square">
        <h1 className="landingBox__title">
          <p>L'art du</p>
          <span>Cocktail</span>
        </h1>
        <ListLink />
      </div>
    </div>
  );
}

export default LandingBox;
