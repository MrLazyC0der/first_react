import React from "react";
import Navbar from "../Component/navbar";
import Info from "./info";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Info />
      <Footer />
    </>
  );
}
