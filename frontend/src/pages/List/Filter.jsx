import { useContext } from "react";
import { ToggleContext } from "../../services/Context";
import DropdownFilterAlcohol from "./DropdownFilterAlcohol";
import DropdownFilterCategory from "./DropdownFilterCategory";
import DropdownFilterIngredient from "./DropdownFilterIngredient";
import ResetButton from "./ResetButton";

function Filter() {
  const { isActionBlockOpened } = useContext(ToggleContext);

  return (
    <div
      className={
        isActionBlockOpened ? "filterBlockOpened filter-btn" : "filter-btn"
      }
    >
      <DropdownFilterAlcohol />

      <DropdownFilterCategory />

      <DropdownFilterIngredient />

      <ResetButton />
    </div>
  );
}

export default Filter;
