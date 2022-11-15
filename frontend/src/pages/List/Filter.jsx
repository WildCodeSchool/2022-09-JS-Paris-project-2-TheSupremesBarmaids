import { useState } from "react";
import FilterAlcohol from "./FilterAlcohol";
import FilterCategory from "./FilterCategory";
import FilterIngredient from "./FilterIngredient";
import ResetButton from "./ResetButton";

function Filter({ renderApi }) {
  const [isAlcoholicOpened, setIsAlcoholicOpened] = useState(false);
  const [isCategoryOpened, setIsCategoryOpened] = useState(false);
  const [isIngredientsOpened, setIsIngredientsOpened] = useState(false);

  const handleOpenAlcoholic = () => setIsAlcoholicOpened(!isAlcoholicOpened);
  const handleOpenCategory = () => setIsCategoryOpened(!isCategoryOpened);
  const handleOpenIngredients = () =>
    setIsIngredientsOpened(!isIngredientsOpened);

  return (
    <div className="filter-btn">
      {/* ALCOHOLIC FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenAlcoholic}>
          Alcoholic
        </button>
        {isAlcoholicOpened ? <FilterAlcohol renderApi={renderApi} /> : null}
      </div>

      {/* CACTEGORIES FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenCategory}>
          Categories
        </button>
        {isCategoryOpened ? <FilterCategory renderApi={renderApi} /> : null}
      </div>

      {/* INGREDIENTS FILTER BUTTON */}
      <div className="dropdown-filter">
        <button type="button" onClick={handleOpenIngredients}>
          Ingredients
        </button>
        {isIngredientsOpened ? (
          <FilterIngredient renderApi={renderApi} />
        ) : null}
      </div>

      {/* RESET BUTTON */}
      <ResetButton renderApi={renderApi} />
    </div>
  );
}

export default Filter;
