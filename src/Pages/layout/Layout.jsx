import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../compiler";

export const Layout = () => {
  return (
    <>
      <Header/>

        <Outlet/>
      
      <Footer />
    </>
  );
};
