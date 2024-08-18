import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../compiler";

export const Layout = () => {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <>
      <div className="page-container overflow-y-hidden" data-darkmode={darkMode?"true":"false"} >
      <Header darkMode={darkMode} setdarkMode={setdarkMode}/>

        <Outlet />
      
      <Footer />
      </div>
    </>
  );
};
