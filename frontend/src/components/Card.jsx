import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import Note from "./Note";

function Card({ id, imgSrc, imgAlt, name }) {
  return (
    <Link to={`/recipe/${name}`} className="card" id={id}>
      <img className="cardImage" src={imgSrc} alt={imgAlt} />
      <div className="favoriteCocktail">
        <AiFillHeart className="isFavorite" />
        <AiOutlineHeart className="notFavorite" />
      </div>
      <Note />
      <p className="cardTitle">{name}</p>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
