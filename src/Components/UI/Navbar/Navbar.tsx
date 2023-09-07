import React from "react";
import { Link, useLocation } from "react-router-dom";

import { navbarRoutes } from "./NavbarRoutes";

import "./navbar.css";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className={"navbar_block"}>
      {navbarRoutes.map((elem) => (
        <div key={elem.path} className={"navbar_link"}>
          <Link key={elem.path} className={"navbar_link"} to={elem.path}>
            <button
              className={
                location.pathname.slice(0, 5) === elem.path.slice(0, 5)
                  ? "navbar_butt_active"
                  : "navbar_butt"
              }
              key={elem.name}
            >
              <elem.icon className={"icon"} />
              <div className={"navbar_name"}>{elem.name}</div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
