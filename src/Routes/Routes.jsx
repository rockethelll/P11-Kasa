import { createBrowserRouter } from "react-router-dom"; 
import App from '../App';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <App /> }
    ]
  }
])

export default routes