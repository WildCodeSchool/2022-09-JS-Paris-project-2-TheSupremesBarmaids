import Logo from "../../components/Logo";

function HeaderHome() {
  return (
    <div>
      <Logo />
      <a className="buttonType" href="/">
        test button Type
        <span className="buttonType__icon">X</span>
      </a>
      <h1 className="linedTitle">
        <span className="linedTitle__text ">test lined Title</span>
      </h1>
    </div>
  );
}

export default HeaderHome;
