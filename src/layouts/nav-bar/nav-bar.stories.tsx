import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from ".";

export default {
  title: "布局组件|菜单栏"
};

export const 默认 = () => (
  <Router>
    <NavBar />
  </Router>
);
