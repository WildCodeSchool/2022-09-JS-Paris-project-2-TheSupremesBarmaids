function Card() {
  // Splitting();
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          className="cardImage"
          src="/images/imgCocktail.jpg"
          alt="cocktail"
        />
        <div className="cardText">
          <h2>Alcoholic</h2>
          <button type="button" className="custom-btn btn-15">
            Detail
          </button>
        </div>
        <h3 className="cardTitle">Cocktail Name</h3>
      </div>
    </div>
  );
}

export default Card;
