function Ingredients({ ingredients }) {
  return (
    <ul className="recipe__list">
      {/* Filter null values in ingredients array before map */}
      {ingredients
        .filter((ingredient) => ingredient !== null)
        .map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
    </ul>
  );
}

export default Ingredients;
