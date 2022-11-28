import { useState } from "react";
import FilterIngredient from "./FilterIngredient";

function DropodownFilterIngredient() {
  const [isIngredientsOpened, setIsIngredientsOpened] = useState(false);
  const handleOpenIngredients = () =>
    setIsIngredientsOpened(!isIngredientsOpened);

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenIngredients}>
        Ingredients
      </button>
      {isIngredientsOpened && (
        <FilterIngredient setIsIngredientsOpened={setIsIngredientsOpened} />
      )}
    </div>
  );
}

export default DropodownFilterIngredient;
