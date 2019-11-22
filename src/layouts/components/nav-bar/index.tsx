import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const NavBar: FC = props => {
  return (
    <nav className="nav__wrapper" {...props}>
      <NavLink
        to="/nav-1"
        className="nav__item nav-ll"
        activeClassName="nav-ll__active"
      >
        安防监控
      </NavLink>
      <NavLink
        to="/nav-2"
        className="nav__item nav-ll"
        activeClassName="nav-ll__active"
      >
        人员管理
      </NavLink>
      <NavLink
        to="/nav-3"
        className="nav__item nav-l"
        activeClassName="nav-l__active"
      >
        车辆管理
      </NavLink>
      <NavLink
        to="/nav-4"
        className="nav__item nav-mid"
        activeClassName="nav-mid__active"
      >
        智安小区
      </NavLink>
      <NavLink
        to="/nav-5"
        className="nav__item nav-r"
        activeClassName="nav-r__active"
      >
        智慧消防
      </NavLink>
      <NavLink
        to="/nav-9"
        className="nav__item nav-rr"
        activeClassName="nav-rr__active"
      >
        智慧环境
      </NavLink>
      <NavLink
        to="/nav-10"
        className="nav__item nav-rr"
        activeClassName="nav-rr__active"
      >
        智慧垃圾
      </NavLink>
    </nav>
  );
};

export default NavBar;
