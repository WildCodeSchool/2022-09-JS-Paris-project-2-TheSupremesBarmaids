import ListLink from "../../components/ListLink";

function LandingBox() {
  return (
    <div className="landingBox">
      <div className="landingBox__square">
        <h1 className="landingBox__title">
          L'art du <br /> <span>Cocktail</span>
        </h1>
        <ListLink />
      </div>
    </div>
  );
}

export default LandingBox;
