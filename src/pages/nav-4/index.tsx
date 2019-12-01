import React, { Fragment } from "react";
import { renderRoutes } from "@/routes";
import BottomBtnGroup from "../bottom-btn-group";
import { NavLink } from "react-router-dom";

export default ({ route }: any) => {
  return (
    <Fragment>
      {renderRoutes(route.routes)}
      <BottomBtnGroup>
        <NavLink
          to="/nav-4/fire-statistics"
          className="link-btn"
          activeClassName="link-btn__active"
        >
          消防数据统计
        </NavLink>
        <NavLink
          to="/nav-4/property-repair"
          className="link-btn"
          activeClassName="link-btn__active"
        >
          物业报修统计
        </NavLink>
        <NavLink
          to="/nav-4/person-vehicle"
          className="link-btn"
          activeClassName="link-btn__active"
        >
          人员车辆统计
        </NavLink>
        <NavLink
          to="/nav-4/incident-report"
          className="link-btn"
          activeClassName="link-btn__active"
        >
          事件上报统计
        </NavLink>
      </BottomBtnGroup>
    </Fragment>
  );
};
