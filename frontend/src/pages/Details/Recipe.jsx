import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Note from "../../components/Note";

function Recipe() {
  return (
    <div className="containerType1 containerType1--padd20">
      <h1 className="pageTitle">Cocktail Name</h1>
      <Note />
      <div className="recipe">
        <div className="recipe__card card">
          <img
            className="cardImage"
            src="/images/imgCocktail.jpg"
            alt="cocktail"
          />
          <div className="favoriteCocktail">
            <AiFillHeart className="isFavorite" />
            <AiOutlineHeart className="notFavorite" />
          </div>
        </div>
        <div className="recipe__ingredients">
          <h2 className="subTitle">Ingredients</h2>
          <ul className="recipe__list">
            <li>Lorem Ipsum</li>
            <li>Dolor sit</li>
            <li>Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing</li>
          </ul>
        </div>
        <div className="recipe__prepa">
          <h2 className="subTitle">Preparation</h2>
          <p className="recipe__text">
            Sed non lacus ac nisl fringilla convallis. In consectetur at nisl
            placerat maximus. Pellentesque non commodo nulla. Morbi nec mauris
            vel arcu lobortis luctus. In vitae elit tortor. Duis sed risus sit
            amet nunc ullamcorper vulputate. Suspendisse non ligula quis nisl
            lobortis porttitor. Vivamus viverra arcu ipsum, in malesuada felis
            rutrum id. Sed scelerisque nunc ac nibh porttitor, ac elementum arcu
            molestie. Curabitur non ipsum non augue consectetur fringilla vel at
            massa. Sed auctor dolor vitae ante lacinia, vitae feugiat elit
            venenatis. Aenean neque eros, dapibus eu convallis et, hendrerit ut
            magna. Nam malesuada felis fringilla imperdiet sagittis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
