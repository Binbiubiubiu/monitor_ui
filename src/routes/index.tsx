import React from "react";
// import { Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import Layout from "../layouts";
import Login from "../pages/login";

const Loading = (props: any) => <div></div>;

export const routeConfig = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: "/nav-1",
        component: loadable(() => import("../pages/nav-1"), {
          fallback: <Loading />
        })
      },
      {
        path: "/nav-2",
        component: loadable(() => import("../pages/nav-2"), {
          fallback: <Loading />
        })
      }
    ]
  }
  //   {
  //     path: "*",
  //     render: () => <Redirect to={{ pathname: "/login" }} />
  //   }
];

export { default as renderRoutes } from "./renderRoutes";
export { default as matchRoutes } from "./matchRoutes";
