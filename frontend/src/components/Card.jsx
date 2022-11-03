function Card() {
  return (
    <div className="test">
      <div className="cardContainer">
        <div className="card">
          <img
            className="cardImage"
            src="/images/imgCocktail.jpg"
            alt="cocktail"
          />
          <div className="notFavorite" />
          <div className="cardText">
            <h3 className="cardTitle">Cocktail Name</h3>
            <div>*Note*</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
