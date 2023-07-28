import React from "react";
import { Link } from "react-router-dom";

const UserPanel = ({ logo, path, title, color }) => {
  return (
    <div
      className={`rounded-[10px] transition transform hover:scale-105 duration-300 ease-in-out`}
      style={{ backgroundColor: color }}
    >
      <Link to={path} className="text-white no-underline">
        <h1 className="text-center text-5xl mt-2">{title}</h1>
        <img className="p-4" src={logo} alt="staff-logo" />
      </Link>
    </div>
  );
};

export default UserPanel;
