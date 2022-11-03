function Footer() {
  return (
    <footer className="footer">
      <div className="logoFooter">
        <img src="/logos/logo-wild.png" alt="logoWild" />
      </div>
      <div className="creditsFooter">
        <div className="creditTexte">
          <h2>© CRÉDITS</h2>
        </div>
        <div className="creditLink">
          <a href="https://fontawesome.com/icons">
            https://fontawesome.com/icons
          </a>
          <br />
          <a href="https://www.pexels.com">https://www.pexels.com</a>
        </div>
      </div>
      <div className="teamFooter">
        <div className="teamTitle">
          <h2>TEAM’S LINKEDINS</h2>
        </div>
        <div className="team">
          <p>
            Yossef Kasabi, Cyril Leclercq, Pascaline Pierre, <br />
            Dinh Huy Trinh, Elif Uluengin
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
