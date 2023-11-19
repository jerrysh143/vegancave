import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer position="bottom-right"/>
    </>
  );
};

export default Layout;
