import { useContext } from "react";
import PostContext from "../../services/Context";
import fetchResetApi from "../../utils/fetchResetApi";

function ResetButton() {
  const { setPosts } = useContext(PostContext);
  const { setLoading } = useContext(PostContext);
  const { setWrongFetch } = useContext(PostContext);

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
