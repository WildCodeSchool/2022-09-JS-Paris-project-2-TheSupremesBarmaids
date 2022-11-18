import { useContext } from "react";
import { ToggleContext } from "../../services/Context";

function FilterDisplay() {
  const { filterSelected } = useContext(ToggleContext);

  return <div>{filterSelected}</div>;
}

export default FilterDisplay;
