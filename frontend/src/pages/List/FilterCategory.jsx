import fetchFilterCategoryApi from "../../utils/fetchFilterCategoryApi";

function FilterCategory({ renderApi }) {
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
            onClick={() =>
              fetchFilterCategoryApi(ele).then((resPosts) =>
                renderApi(resPosts)
              )
            }
          >
            {ele.replace("_/_", " / ").replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
