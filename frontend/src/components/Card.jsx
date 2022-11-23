import { Link } from "react-router-dom";

function Card({ id, imgSrc, imgAlt, name }) {
  return (
    <Link to={`/recipe/${name}`} className="card" id={id}>
      <img className="cardImage" src={imgSrc} alt={imgAlt} />
      <p className="cardTitle">{name}</p>
    </Link>
  );
}

export default Card;
