import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Logement from '../pages/Logement/Logement';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'logement/:id', element: <Logement /> }
    ]
  }
]);

export default routes;