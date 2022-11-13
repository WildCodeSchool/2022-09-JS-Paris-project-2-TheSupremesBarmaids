import PropTypes from "prop-types";
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
        src="/public/icones/search.svg"
        alt="search"
        onClick={() => callApi("search.php?", "s=", searchTerm)}
        aria-hidden="true"
      />
    </div>
  );
}

SearchBar.propTypes = {
  callApi: PropTypes.func.isRequired,
};

export default SearchBar;
