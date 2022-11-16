import { useContext } from "react";
import { ToggleContext } from "../../services/Context";

function ActionButton() {
  const { isActionBlockOpened, setIsActionblockOpened } =
    useContext(ToggleContext);
  const handleclick = () => {
    setIsActionblockOpened(!isActionBlockOpened);
  };
  return (
    <button
      className="iconAction iconAction--filterSearch"
      type="button"
      onClick={handleclick}
    >
      <span className="srOnly">Opening Search end filter</span>
    </button>
  );
}

export default ActionButton;
