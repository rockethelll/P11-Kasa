import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="about">A Propos</NavLink>
    </nav>
  );
};

export default Navbar;
