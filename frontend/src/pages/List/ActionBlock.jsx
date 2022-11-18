import { useContext } from "react";
import { ToggleContext } from "../../services/Context";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import FilterDisplay from "./FilterDisplay";

function ActionBlock() {
  const { filterSelected } = useContext(ToggleContext);

  return (
    <div className="action-block">
      <SearchBar />
      <Filter />
      {filterSelected !== "" ? <FilterDisplay /> : null}
    </div>
  );
}

export default ActionBlock;
