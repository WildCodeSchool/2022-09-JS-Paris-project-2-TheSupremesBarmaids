/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function ActionBlock({ callApi }) {
  return (
    <div className="action-block">
      <SearchBar callApi={callApi} />
      <Filter callApi={callApi} />
    </div>
  );
}

export default ActionBlock;
