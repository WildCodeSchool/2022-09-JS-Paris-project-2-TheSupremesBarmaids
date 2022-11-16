import { Link } from "react-router-dom";

function RandomLink() {
  return (
    <Link to="/recipe/margarita" className="buttonType">
      <span className="buttonType__text">On choisit pour vous ?</span>
      <span className="buttonType__icon" />
    </Link>
  );
}

export default RandomLink;
