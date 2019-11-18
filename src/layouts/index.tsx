import React from "react";
import { renderRoutes } from "../routes";

export default function Layout({ route }: any) {
  console.log(route.routes);
  return <div>{renderRoutes(route.routes)}</div>;
}
