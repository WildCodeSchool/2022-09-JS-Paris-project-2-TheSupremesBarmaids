import DropdownFilterAlcohol from "./DropdownFilterAlcohol";
import DropdownFilterCategory from "./DropdownFilterCategory";
import DropdownFilterIngredient from "./DropdownFilterIngredient";
import ResetButton from "./ResetButton";

function Filter() {
  return (
    <div className="filter-btn">
      <DropdownFilterAlcohol />

      <DropdownFilterCategory />

      <DropdownFilterIngredient />

      <ResetButton />
    </div>
  );
}

export default Filter;
