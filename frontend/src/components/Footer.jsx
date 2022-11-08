function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper containerType1">
        <div className="footer__block logoFooter">
          <img src="/logos/logo-wild-white.png" alt="logoWild" />
        </div>
        <div className="footer__block credits">
          <p className="footer__title">© CRÉDITS</p>
          <p className="footer__text credits_links">
            <a href="https://fontawesome.com/icons">
              https://fontawesome.com/icons
            </a>
            <a href="https://www.pexels.com">https://www.pexels.com</a>
          </p>
        </div>
        <div className="footer__block team">
          <p className="footer__title">TEAM’S LINKEDINS</p>
          <p className="footer__text team__members">
            <a href="https://www.linkedin.com">Yossef Kasabi, </a>
            <a href="https://www.linkedin.com/in/cylecq/">Cyril Leclercq, </a>
            <a href="https://www.linkedin.com/in/pascalinepierre/">
              Pascaline Pierre,{" "}
            </a>
            <a href="https://www.linkedin.com/in/huytrinhlaser/">
              Dinh Huy Trinh,{" "}
            </a>
            <a href="https://www.linkedin.com/in/elif-uluengin/">
              Elif Uluengin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
