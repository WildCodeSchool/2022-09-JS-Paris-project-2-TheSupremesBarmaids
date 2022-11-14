import { useState } from "react";
import fetchSearchApi from "../../utils/fetchSearchApi";

function SearchBar({ renderApi }) {
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
        onClick={() =>
          fetchSearchApi(searchTerm).then((resPosts) => renderApi(resPosts))
        }
        aria-hidden="true"
      />
    </div>
  );
}

export default SearchBar;
