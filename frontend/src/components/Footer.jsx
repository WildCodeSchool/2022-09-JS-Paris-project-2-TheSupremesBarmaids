import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <div className="logoFooter">
        <img src="/logos/logo-wild.png" alt="logoWild" />
      </div>
      <div className="creditsFooter">
        <h2>© CRÉDITS</h2>
        <a href="https://fontawesome.com/icons">
          https://fontawesome.com/icons
        </a>
        <a href="https://www.pexels.com">https://www.pexels.com</a>
      </div>
      <div className="teamFooter">
        <h2>TEAM’S LINKEDINS</h2>
        <p>
          Yossef Kasabi, Cyril Leclercq, Pascaline Pierre, Dinh Huy Trinh, Elif
          Uluengin
        </p>
      </div>
    </div>
  );
}

export default Footer;
