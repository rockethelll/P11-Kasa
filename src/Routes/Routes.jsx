import { createBrowserRouter } from "react-router-dom"; 
import App from '../App';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <App /> },
      { path: 'about', element: <About /> },
    ]
  }
])

export default routes