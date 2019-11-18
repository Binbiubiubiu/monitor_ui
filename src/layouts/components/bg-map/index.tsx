import React, { Component } from "react";
import AMap from "AMap";
import "./style.scss";

class BgMap extends Component {
  bgMap: any;
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    this.bgMap = new AMap.Map("map-container", {
      // center: [120.7601, 30.752215],
      // resizeEnable: true, // 是否监控地图容器尺寸变化
      mapStyle: "amap://styles/darkblue"
      // mapStyle: 'amap://styles/3fb8fe4f9319b3bdf59165ed1be5d177',
    });
  }

  render() {
    return <div id="map-container" className="bg-map"></div>;
  }
}

export default BgMap;
