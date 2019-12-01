import React from "react";
import { renderRoutes } from "../routes";
import NavBar from "./nav-bar";
import BgMap from "./bg-map/bg-map";
import TitleBanner from "./title-banner";
import { withPositioned } from "@/mixins/Positioned";
import { CommunityMarker } from "./bg-map";

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
      <BgMap>
        {(map: any) => {
          return <CommunityMarker map={map} />;
        }}
      </BgMap>
      <PositionedTitleBanner />
      <PositionedNavBar />
      {renderRoutes(route.routes)}
    </>
  );
}
