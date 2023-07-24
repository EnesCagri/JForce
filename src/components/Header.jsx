import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ setUserRole }) => {
  return (
    <div>
      <header className="mb-4">
        <nav className="navbar navbar-expand-md navbar-dark bg-gray-900">
          <div className="flex flex-row w-full justify-between">
            <Link to="/" className="navbar-brand">
              <div className="flex flex-row">
                <img className="ml-8 mr-4" src={logo} alt="logo" />
                <h1 className="text-5xl mt-2">HR</h1>
              </div>
            </Link>

            <Link
              to="/login"
              className="navbar-brand"
              onClick={(e) => setUserRole("")}
            >
              <div className="flex flex-row">
                <h1 className="text-2xl mt-2">Çıkış</h1>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
