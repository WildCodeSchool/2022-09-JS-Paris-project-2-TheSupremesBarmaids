import { PropTypes } from "prop-types";

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

ActionBlock.propTypes = {
  callApi: PropTypes.func.isRequired,
};

export default ActionBlock;
