import Logo from "../../components/Logo";
import HomeLink from "../../components/HomeLink";
import ActionButton from "./ActionButton";

function HeaderList() {
  return (
    <header className="header">
      <HomeLink />
      <Logo />
      <ActionButton />
    </header>
  );
}

export default HeaderList;
