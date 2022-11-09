/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-absolute-path
import SearchIcon from "/public/icones/search.svg";
import { useState } from "react";

function SearchBar({ callApi }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <input
        className="js-search"
        placeholder="Search Cocktails"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => callApi("search.php?", "s=", searchTerm)}
        aria-hidden="true"
      />
    </div>
  );
}

export default SearchBar;
