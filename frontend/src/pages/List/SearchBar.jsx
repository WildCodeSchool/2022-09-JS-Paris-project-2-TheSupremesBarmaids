import { useState, useEffect } from "react";
import fetchSearchApi from "../../utils/fetchSearchApi";
import fetchResetApi from "../../utils/fetchResetApi";

function SearchBar({ renderApi }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmitClick = () => {
    fetchSearchApi(searchTerm).then((resPost) => renderApi(resPost));
  };

  const isSearchBarEmpty = searchTerm.length === 0;

  useEffect(() => {
    if (isSearchBarEmpty) fetchResetApi().then((resPost) => renderApi(resPost));
  }, [isSearchBarEmpty]); // Reset list if the search bar is empty

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
