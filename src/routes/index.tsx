import React from "react";
// import { Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import Layout from "../layouts";
import Login from "../pages/login/login";
import { Redirect } from "react-router";

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
        component: loadable(() => import("../pages/Nav-1"), {
          fallback: <Loading />
        })
      },
      {
        path: "/nav-2",
        component: loadable(() => import("../pages/Nav-2"), {
          fallback: <Loading />
        })
      },
      {
        path: "/nav-3",
        component: loadable(() => import("../pages/Nav-3"), {
          fallback: <Loading />
        })
      },
      {
        path: "/nav-4",
        component: loadable(() => import("../pages/nav-4"), {
          fallback: <Loading />
        }),
        routes: [
          {
            path: "/nav-4/fire-statistics",
            component: loadable(
              () => import("../pages/nav-4/fire-statistics"),
              {
                fallback: <Loading />
              }
            )
          },
          {
            path: "/nav-4/property-repair",
            component: loadable(() => import("@/pages/nav-4/property-repair"), {
              fallback: <Loading />
            })
          },
          {
            path: "/nav-4/person-vehicle",
            component: loadable(() => import("@/pages/nav-4/person-vehicle"), {
              fallback: <Loading />
            })
          },
          {
            path: "/nav-4/incident-report",
            component: loadable(() => import("@/pages/nav-4/incident-report"), {
              fallback: <Loading />
            })
          },
          {
            path: "/nav-4",
            component: () => <Redirect to="/nav-4/fire-statistics" />
          }
        ]
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
