import FilterAlcohol from "./FilterAlcohol";
import FilterCategory from "./FilterCategory";
import FilterIngredient from "./FilterIngredient";

function Filter({ callApi }) {
  return (
    <div className="filter-btn">
      <FilterAlcohol callApi={callApi} />
      <FilterCategory callApi={callApi} />
      <FilterIngredient callApi={callApi} />

      {/* RESET BUTTON */}
      <div className="btn1">
        <a
          href="#ingredient_filter"
          className="button"
          onClick={() => callApi("filter.php?", "i=", "Gin")}
        >
          RESET FILTER
        </a>
      </div>
    </div>
  );
}

export default Filter;
