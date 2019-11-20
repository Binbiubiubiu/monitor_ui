import React from "react";
import { renderRoutes } from "../routes";
import NavBar from "./components/nav-bar";
import BgMap from "./components/bg-map/bg-map";
import TitleBanner from "./components/title-banner";

export default function Layout({ route }: any) {
  return (
    <div>
      <BgMap />
      <TitleBanner />
      <NavBar />
      {renderRoutes(route.routes)}
    </div>
  );
}
