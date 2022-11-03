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
      <a href="/" className="logoImg" title="Go Home">
        <Logo />
      </a>
    </header>
  );
}

export default HeaderDetails;
