import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header__wrapper'>
      <header>
        <div className="logo">
          <img src="" alt="Logo Kasa" />
        </div>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="about">À propos</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
