import { useContext } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchResetApi from "../../utils/fetchResetApi";

function FilterDisplay() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { filterSelected, setFilterSelected } = useContext(ToggleContext);

  const handleClick = () => {
    fetchResetApi()
      .then((resPosts) => {
        setPosts(resPosts);
        setWrongFetch(false);
      })
      .catch(() => {
        setWrongFetch(true);
      })
      .finally(() => {
        setLoading(false);
      });
    setFilterSelected("");
  };

  return (
    <div className="filterDisplay">
      <p className="filterText">Selected Filter :</p>
      <button type="button" onClick={handleClick}>
        <span className="nameFilter">{filterSelected}</span>
        <span className="exitFilter">X</span>
      </button>
    </div>
  );
}

export default FilterDisplay;
