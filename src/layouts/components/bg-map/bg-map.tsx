import React, { Component } from "react";
import AMap from "AMap";
import "./style.scss";

export interface BgMapProps {
  [props: string]: any;
}


export class BgMap extends Component<BgMapProps> {
 
  bgMap: any;

  render() {
    const { children } = this.props;

    return (
      <div id="map-container" className="bg-map">
        {children}
      </div>
    );
  }

  componentDidMount() {
    this._initMap();
  }

  componentWillMount() {
    this._destoryMap();
  }

  _initMap() {
    this.bgMap = new AMap.Map("map-container", {
      // center: [120.7601, 30.752215],
      // resizeEnable: true, // 是否监控地图容器尺寸变化
      mapStyle: "amap://styles/darkblue"
      // mapStyle: 'amap://styles/3fb8fe4f9319b3bdf59165ed1be5d177',
    });
  }

  _destoryMap() {
    if (this.bgMap) {
      this.bgMap.destroy();
      this.bgMap = null;
    }
  }
}

export default BgMap;
