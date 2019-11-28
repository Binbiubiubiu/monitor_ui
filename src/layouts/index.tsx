import React from "react";
import { renderRoutes } from "../routes";
import NavBar from "./components/nav-bar";
import BgMap from "./components/bg-map/bg-map";
import TitleBanner from "./components/title-banner";
import { withPositioned } from "@/mixins/Positioned";

const PositionedNavBar = withPositioned(NavBar)({
  bottom: 30,
  middle: true
});

const PositionedTitleBanner = withPositioned(TitleBanner)({
  top: 24,
  middle: true
});

export default function Layout({ route }: any) {
  return (
    <>
      <BgMap />
      <PositionedTitleBanner />
      <PositionedNavBar />
      {renderRoutes(route.routes)}
    </>
  );
}
