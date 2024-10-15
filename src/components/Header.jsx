import './Header.scss'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu" />
<Navbar/>
<div className="search-bar">
      <div className="search-bar__logo-container">
        <a href="/" className="search-bar__logo-link">
          <img
            src="/img/rita.svg"
            alt="logo"
            className="search-bar__logo"
          />
        </a>
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input type="search" className="search-bar__form-search" id="busqueda" />
        <input type="submit" className="search-bar__form-submit" value="" />
      </form>
      <div className="search-bar__carrito-container">
       
       <Link to="Carrito">
        <img
          src="/img/minicart.svg"
          alt="minicart"
          className="search-bar__carrito-image"
        />
       </Link>
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  
  </header>
  );
};

export default Header