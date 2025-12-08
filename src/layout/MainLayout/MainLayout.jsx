import React from "react";
import Header from "../../components/Site/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Site/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
