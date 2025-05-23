import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import HeaderLogo from "../assets/img/uFestivalLogo.png";
import NavBar from "../assets/components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <header className="flex flex-row justify-around items-center h-22">
        <img src={HeaderLogo} alt="headerlogo" className="w-22 h-auto" />
      </header>
      <NavBar />
      <main className="w-11/12 m-auto pt-6">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;