import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Support from './Support/Support.jsx';
import About from './about/AboutPage.jsx';
import Product from './Products/Products.jsx';
import Pricing from './Pricing/Pricing.jsx';
import SignUp from './Home/SignupLand.jsx';
import NotFound from './PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "support",
        element: <Support />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "pricing",
        element: <Pricing />
      },{
        path:"signup",
        element:<SignUp />

      }
      ,{
        path: "*",
        element :<NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
