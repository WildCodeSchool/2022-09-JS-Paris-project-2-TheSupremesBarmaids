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
      <a href="/" className="logoImg" title="Go Home">
        <Logo />
      </a>
    </header>
  );
}

export default HeaderList;
