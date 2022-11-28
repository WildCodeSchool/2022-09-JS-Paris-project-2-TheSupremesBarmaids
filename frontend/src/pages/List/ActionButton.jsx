import { useContext } from "react";
import { ToggleContext } from "../../services/Context";

function ActionButton() {
  const { isActionBlockOpened, setIsActionBlockOpened } =
    useContext(ToggleContext);
  const handleclick = () => {
    setIsActionBlockOpened(!isActionBlockOpened);
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
