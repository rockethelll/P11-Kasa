import { NavLink, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="" alt="Logo Kasa" />
        </div>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="A propos">À propos</NavLink>
        </nav>
      </header>
      <div><Outlet/></div>
    </>
  );
};

export default Header;
