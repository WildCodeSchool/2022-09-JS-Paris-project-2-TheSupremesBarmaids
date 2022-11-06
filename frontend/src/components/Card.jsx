import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Note from "./Note";

function Card() {
  return (
    <a href="/recipe" className="card">
      <img className="cardImage" src="/images/imgCocktail.jpg" alt="cocktail" />
      <div className="favoriteCocktail">
        <AiFillHeart className="isFavorite" />
        <AiOutlineHeart className="notFavorite" />
      </div>
      <Note />
      <h3 className="cardTitle">Cocktail Name</h3>
    </a>
  );
}

export default Card;
