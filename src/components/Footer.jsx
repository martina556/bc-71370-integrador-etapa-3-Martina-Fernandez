import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="section-links">
        <div className="card-info">
          <h3>Informacion</h3>
          <a href="./nosotros.html" className="link-footer">Nosotros</a>
        </div>
        <div className="card-ayuda">
          <h3>Ayuda</h3>
          <a href="./contacto.html" className="link-footer">Contacto</a>
        </div>
        <div className="card-redes">
          <h3>Redes</h3>

          <ul className="icons-redes">
            <li className="list-redes">
              <a
                href="https://www.instagram.com/lipa.cosmeticanatural?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="link-redes"
              >
                <img
                  src="public/img/instagram.svg"
                  alt="instagram"
                  className="icon"
                />
              </a>
            </li>
            <li className="list-redes">
              <a href="https://x.com/NaturaArgentina">
                <img
                  src="../public/img/twitter.svg"
                  alt="twitter"
                  className="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-derechos">
        <a href="../index.html">
          <img
            src="../public/img/rita.svg"
            alt="logo"
            className="search-bar__logo"
          />
        </a>
        <p>© Rita 2024 · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer