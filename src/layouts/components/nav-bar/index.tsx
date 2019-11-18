import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/nav-1" activeClassName="selected">
        nav-1
      </NavLink>
      <NavLink to="/nav-2" activeClassName="selected">
        nav-2
      </NavLink>
    </nav>
  );
}

// const NavItem = (props: any) => {
//   return NavLink;
// };
