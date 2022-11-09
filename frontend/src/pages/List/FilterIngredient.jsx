function FilterIngredient({ callApi }) {
  // INGREDIENT FILTERS
  const ingredientFilter = [
    "Gin",
    "Scotch",
    "Tequila",
    "Vodka",
    "Whiskey",
    "Ricard",
    "Milk",
    "Coffee",
    "Lemon",
    "Yoghurt",
  ]; // Every filters i=
  return ingredientFilter.map((ele) => (
    // Create a div for every alcoholic filters
    <div className="btn1" key={ele}>
      <a
        href="#ingredient_filter"
        className="button"
        onClick={() => callApi("filter.php?", "i=", ele)}
      >
        {ele}
      </a>
    </div>
  ));
}

export default FilterIngredient;
