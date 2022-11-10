/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function SearchBar({ callApi }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callApi("search.php?", "s=", searchTerm);
  };

  const isSearchBarEmpty = searchTerm.length === 0;

  useEffect(() => {
    if (isSearchBarEmpty) callApi("filter.php?", "i=", "Gin");
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
      <button className="search-button" type="submit" onClick={handleSubmit}>
        <img src="/public/icones/searchColorLeather.svg" alt="searchIcon" />
      </button>
    </form>
  );
}

export default SearchBar;
