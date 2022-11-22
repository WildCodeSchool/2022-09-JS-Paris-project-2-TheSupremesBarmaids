import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import HomeLink from "../../components/HomeLink";
import ActionButton from "./ActionButton";

function HeaderList() {
  return (
    <header className="header">
      <nav className="nav">
        <HomeLink />
        <ActionButton />
      </nav>
      <Link to="/" className="logoImg" title="Go Home">
        <Logo />
      </Link>
    </header>
  );
}

export default HeaderList;
