/* eslint-disable react/prop-types */
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PropTypes } from "prop-types";
import Note from "./Note";

function Card({ id, imgSrc, imgAlt, name }) {
  return (
    <a href={`/recipe/${name}`} className="card" id={id}>
      <img className="cardImage" src={imgSrc} alt={imgAlt} />
      <div className="favoriteCocktail">
        <AiFillHeart className="isFavorite" />
        <AiOutlineHeart className="notFavorite" />
      </div>
      <Note />
      <p className="cardTitle">{name}</p>
    </a>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

Card.propTypes = {
  imgAlt: PropTypes.string.isRequired,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
