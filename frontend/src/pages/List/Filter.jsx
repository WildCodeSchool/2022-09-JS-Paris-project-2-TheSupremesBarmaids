import PropTypes from "prop-types";
import { useState } from "react";

import FilterAlcohol from "./FilterAlcohol";
import FilterCategory from "./FilterCategory";
import FilterIngredient from "./FilterIngredient";

function Filter({ callApi }) {
  const [openAlcoholic, setOpenAlcoholic] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openIngredients, setOpenIngredients] = useState(false);

  const handleOpenAlcoholic = () => setOpenAlcoholic(!openAlcoholic);
  const handleOpenCategory = () => setOpenCategory(!openCategory);
  const handleOpenIngredients = () => setOpenIngredients(!openIngredients);

  return (
    <div className="filter-btn">
      {/* ALCOHOLIC FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenAlcoholic}>
          Alcoholic
        </button>
        {openAlcoholic ? <FilterAlcohol callApi={callApi} /> : null}
      </div>

      {/* CACTEGORIES FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenCategory}>
          Categories
        </button>
        {openCategory ? <FilterCategory callApi={callApi} /> : null}
      </div>

      {/* INGREDIENTS FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenIngredients}>
          Ingredients
        </button>
        {openIngredients ? <FilterIngredient callApi={callApi} /> : null}
      </div>

      {/* RESET BUTTON */}
      <a
        href="#ingredient_filter"
        className="buttonType reset-filter"
        onClick={() => callApi("filter.php?", "i=", "Gin")}
      >
        <span className="buttonType__text">RESET FILTER</span>
        <span className="buttonType__icon" />
      </a>
    </div>
  );
}

Filter.propTypes = {
  callApi: PropTypes.func.isRequired,
};

export default Filter;
