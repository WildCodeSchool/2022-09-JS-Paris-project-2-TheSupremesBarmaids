import { useContext } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchResetApi from "../../utils/fetchResetApi";

function ResetButton() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened } = useContext(ToggleContext);

  const handleClick = () => {
    setLoading(true);
    fetchResetApi()
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsActionBlockOpened(false);
  };

  return (
    <button
      type="button"
      className="buttonType reset-filter"
      onClick={handleClick}
    >
      <span className="buttonType__text">RESET FILTER</span>
      <span className="buttonType__icon" />
    </button>
  );
}

export default ResetButton;
