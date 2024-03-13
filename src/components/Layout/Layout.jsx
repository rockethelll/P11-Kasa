import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
