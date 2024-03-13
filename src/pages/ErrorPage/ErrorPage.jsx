import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const ErrorPage = () => {
  return (
    <div className="error404">
      <Header />
      <div className="container">
        <p className="num-error">404</p>
        <p className="text-error">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/" className="link-error">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
