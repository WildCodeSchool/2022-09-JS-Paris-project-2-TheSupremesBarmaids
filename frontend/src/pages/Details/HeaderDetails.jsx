import HomeLink from "../../components/HomeLink";
import Logo from "../../components/Logo";
import ReturnSearch from "./ReturnSearch";

function HeaderDetails() {
  return (
    <header className="header">
      <HomeLink />
      <Logo />
      <ReturnSearch />
    </header>
  );
}

export default HeaderDetails;
