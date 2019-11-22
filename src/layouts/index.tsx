import React from "react";
import { renderRoutes } from "../routes";
import NavBar from "./components/nav-bar";
import BgMap from "./components/bg-map/bg-map";
import TitleBanner from "./components/title-banner";
import Positioned from "@/components/Positioned";

const PositionedNavBar = Positioned(NavBar)({
  bottom: 30,
  middle: true
});

export default function Layout({ route }: any) {
  return (
    <>
      <BgMap />
      <TitleBanner />
      <PositionedNavBar style={{ fontSize: 13 }} />
      {renderRoutes(route.routes)}
    </>
  );
}
