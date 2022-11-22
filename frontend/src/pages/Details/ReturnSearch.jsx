import { Link } from "react-router-dom";

function ReturnSearch() {
  return (
    <Link to="/list" className="iconAction iconAction--list">
      <span className="srOnly">Back to List with opened Search</span>
    </Link>
  );
}

export default ReturnSearch;
