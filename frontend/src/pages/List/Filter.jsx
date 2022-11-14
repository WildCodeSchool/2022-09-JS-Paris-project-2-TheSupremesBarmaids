import { useState } from "react";
import fetchResetApi from "../../utils/fetchResetApi";
import FilterAlcohol from "./FilterAlcohol";
import FilterCategory from "./FilterCategory";
import FilterIngredient from "./FilterIngredient";

function Filter({ renderApi }) {
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
        {openAlcoholic ? <FilterAlcohol renderApi={renderApi} /> : null}
      </div>

      {/* CACTEGORIES FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenCategory}>
          Categories
        </button>
        {openCategory ? <FilterCategory renderApi={renderApi} /> : null}
      </div>

      {/* INGREDIENTS FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenIngredients}>
          Ingredients
        </button>
        {openIngredients ? <FilterIngredient renderApi={renderApi} /> : null}
      </div>

      {/* RESET BUTTON */}
      <button
        type="button"
        className="buttonType reset-filter"
        onClick={() => fetchResetApi().then((resPost) => renderApi(resPost))}
      >
        <span className="buttonType__text">RESET FILTER</span>
        <span className="buttonType__icon" />
      </button>
    </div>
  );
}

export default Filter;
