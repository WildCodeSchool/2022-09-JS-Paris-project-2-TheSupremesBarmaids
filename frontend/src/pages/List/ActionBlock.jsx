import SearchBar from "./SearchBar";
import Filter from "./Filter";

function ActionBlock({ renderApi }) {
  return (
    <div className="action-block">
      <SearchBar renderApi={renderApi} />
      <Filter renderApi={renderApi} />
    </div>
  );
}

export default ActionBlock;
