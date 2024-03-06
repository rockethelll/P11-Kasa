import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="about">À propos</NavLink>
    </nav>
  );
};

export default Navbar;
