import { Link } from "react-router-dom";

function ListLink() {
  return (
    <Link to="/list" className="buttonType">
      <span className="buttonType__text">All our cocktails</span>
      <span className="buttonType__icon" />
    </Link>
  );
}

export default ListLink;
