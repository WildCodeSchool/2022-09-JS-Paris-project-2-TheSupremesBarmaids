import { useState, useEffect, useContext } from "react";
import PostContext from "../../services/Context";
import fetchSearchApi from "../../utils/fetchSearchApi";
import fetchResetApi from "../../utils/fetchResetApi";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setPosts } = useContext(PostContext);
  const { setLoading } = useContext(PostContext);
  const { setWrongFetch } = useContext(PostContext);

  const handleSubmitClick = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchSearchApi(searchTerm).then((resPosts) => {
      if (resPosts !== null) {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      } else {
        setLoading(false);
        setWrongFetch(true);
      }
    });
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
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
    }
  }, [searchTerm]); // Reset list if the search bar is empty

  return (
    <form className="search-box" role="search">
      <label htmlFor="search" className="srOnly">
        Search Cocktails
      </label>
      <input
        className="search-input"
        type="search"
        placeholder="Search Cocktails"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="search-button"
        type="submit"
        onClick={handleSubmitClick}
      >
        <img src="/public/icones/searchColorLeather.svg" alt="searchIcon" />
      </button>
    </form>
  );
}
export default SearchBar;
