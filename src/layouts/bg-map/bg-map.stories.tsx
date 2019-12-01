import React from "react";
import BgMap from "./bg-map";
import CommunityMarker from "./community-marker";

export default {
  title: "布局组件|地图"
};

export const 默认 = () => {
  return <BgMap />;
};

export const 社区点 = () => {
  return (
    <BgMap>
      {(map: any) => {
        return <CommunityMarker map={map} />;
      }}
    </BgMap>
  );
};
