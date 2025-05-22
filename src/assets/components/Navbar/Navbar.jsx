import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/Home");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div
      id="nav-bar"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 h-18 w-10/12 max-w-xl shadow-2xl rounded-full border border-gray-100 bg-white/30 backdrop-blur-md"
    >
      <div
        id="buttons-container"
        className="flex flex-row justify-evenly items-center h-full"
      >
        <Link
          to="/info"
          className={`flex items-center p-2 transition-all duration-200 ${
            currentPath === "/info"
              ? "p-3 border border-gray-200 rounded-full shadow-sm"
              : ""
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "26px" }}
          >
            info
          </span>
        </Link>

        <Link
          to="/music"
          className={`flex items-center p-2 transition-all duration-200 ${
            currentPath === "/music"
              ? "p-3 border border-gray-200 rounded-full shadow-sm"
              : ""
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "26px" }}
          >
            music_note
          </span>
        </Link>

        <Link
          to="/home"
          className={`flex items-center p-2 transition-all duration-200 ${
            currentPath === "/home"
              ? "p-3 border border-gray-200 rounded-full shadow-sm"
              : ""
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "26px" }}
          >
            home
          </span>
        </Link>

        <Link
          to="/location"
          className={`flex items-center p-2 transition-all duration-200 ${
            currentPath === "/location"
              ? "p-3 border border-gray-200 rounded-full shadow-sm"
              : ""
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "26px" }}
          >
            location_on
          </span>
        </Link>

        <Link
          to="/more"
          className={`flex items-center p-2 transition-all duration-200 ${
            currentPath === "/more"
              ? "p-3 border border-gray-200 rounded-full shadow-sm"
              : ""
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "26px" }}
          >
            more_horiz
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
