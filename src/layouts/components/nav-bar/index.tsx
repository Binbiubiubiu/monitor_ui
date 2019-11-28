import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export interface NavBarProps {
  [props: string]: any;
}

export const NavBar: FC<NavBarProps> = props => {
  return (
    <nav className="nav__wrapper" {...props}>
      <NavLink
        to="/nav-1"
        className="nav__item nav-mid"
        activeClassName="nav-mid__active"
      >
        社区服务
      </NavLink>
      <NavLink
        to="/nav-2"
        className="nav__item nav-mid"
        activeClassName="nav-mid__active"
      >
        安防管理
      </NavLink>
      <NavLink
        to="/nav-3"
        className="nav__item nav-mid"
        activeClassName="nav-mid__active"
      >
        消防管理
      </NavLink>
      <NavLink
        to="/nav-4"
        className="nav__item nav-mid"
        activeClassName="nav-mid__active"
      >
        大数据分析
      </NavLink>
    </nav>
  );
};

export default NavBar;
