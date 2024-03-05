import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="../images/Logo_couleur.png" alt="Logo Kasa" />
      </div>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="about">À propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
