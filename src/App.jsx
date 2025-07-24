import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app.css";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import Info from "./Component/info";
import Home from "./page/home.jsx";
import Layout from "./Component/Layout.jsx";
import About from "./page/about.jsx";
import Protfolio from "./page/portfolio.jsx";
import Contact from "./page/contact.jsx";
import Separator from "./Component/Separator.jsx";



import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Notfound from "./page/Notfound.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Navigate to={"/"}/>},
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Protfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
