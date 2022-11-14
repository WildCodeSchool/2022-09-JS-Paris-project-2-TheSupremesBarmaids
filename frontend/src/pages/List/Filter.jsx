import fetchResetApi from "../../utils/fetchResetApi";
import FilterAlcohol from "./FilterAlcohol";
import FilterCategory from "./FilterCategory";
import FilterIngredient from "./FilterIngredient";

function Filter({ renderApi }) {
  return (
    <div className="filter-btn">
      <FilterAlcohol renderApi={renderApi} />
      <FilterCategory renderApi={renderApi} />
      <FilterIngredient renderApi={renderApi} />

      {/* RESET BUTTON */}
      <div className="btn1">
        <a
          href="#ingredient_filter"
          className="button"
          onClick={() => fetchResetApi().then((resPost) => renderApi(resPost))}
        >
          RESET FILTER
        </a>
      </div>
    </div>
  );
}

export default Filter;
