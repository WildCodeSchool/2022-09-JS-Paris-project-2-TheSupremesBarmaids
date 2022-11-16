import { useContext } from "react";
import { ToggleContext } from "../../services/Context";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function ActionBlock() {
  const { isActionBlockOpened } = useContext(ToggleContext);

  return (
    <div
      className={
        isActionBlockOpened ? "actionBlockOpened action-block" : "action-block"
      }
    >
      <SearchBar />
      <Filter />
    </div>
  );
}

export default ActionBlock;
