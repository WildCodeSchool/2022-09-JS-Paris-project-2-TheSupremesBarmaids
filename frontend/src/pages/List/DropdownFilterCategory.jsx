import { useState } from "react";
import FilterCategory from "./FilterCategory";

function DropdownFilterCategory() {
  const [isCategoryOpened, setIsCategoryOpened] = useState(false);
  const handleOpenCategory = () => setIsCategoryOpened(!isCategoryOpened);

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenCategory}>
        Categories
      </button>
      {isCategoryOpened ? (
        <FilterCategory setIsCategoryOpened={setIsCategoryOpened} />
      ) : null}
    </div>
  );
}

export default DropdownFilterCategory;
