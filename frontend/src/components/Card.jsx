import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

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

export default Card;
