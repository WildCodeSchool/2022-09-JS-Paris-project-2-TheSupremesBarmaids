import { Link } from "react-router-dom";
import HomeLink from "../../components/HomeLink";
import Logo from "../../components/Logo";
import ReturnSearch from "./ReturnSearch";

function HeaderDetails() {
  return (
    <header className="header">
      <nav className="nav">
        <HomeLink />
        <ReturnSearch />
      </nav>
      <Link to="/" className="logoImg" title="Go Home">
        <Logo />
      </Link>
    </header>
  );
}

export default HeaderDetails;
