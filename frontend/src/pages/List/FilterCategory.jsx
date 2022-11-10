/* eslint-disable react/prop-types */
function FilterCategory({ callApi }) {
  // CATEGORY FILTERS
  const categoryFilters = [
    "Cocktail",
    "Shot",
    "Coffee_/_Tea",
    "Punch_/_Party Drink",
    "Beer",
    "Soft_Drink",
  ]; // Every filters c=

  return (
    <ul className="filter-list">
      {categoryFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href="#category_filter"
            className="button"
            onClick={() => callApi("filter.php?", "c=", ele)}
          >
            {ele.replace("_/_", " / ").replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
