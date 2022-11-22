import { useState } from "react";
import FilterAlcohol from "./FilterAlcohol";

function DropdownFilterAlcohol() {
  const [isAlcoholicOpened, setIsAlcoholicOpened] = useState(false);
  const handleOpenAlcoholic = () => setIsAlcoholicOpened(!isAlcoholicOpened);

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenAlcoholic}>
        Alcoholic
      </button>
      {isAlcoholicOpened && (
        <FilterAlcohol setIsAlcoholicOpened={setIsAlcoholicOpened} />
      )}
    </div>
  );
}

export default DropdownFilterAlcohol;
