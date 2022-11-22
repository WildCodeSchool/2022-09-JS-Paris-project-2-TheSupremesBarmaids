import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <Link to="/" className="iconAction iconAction--home">
      <span className="srOnly">Back to Home</span>
    </Link>
  );
}

export default HomeLink;
