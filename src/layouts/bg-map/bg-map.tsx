import React, { Component } from "react";
import AMap from "AMap";
import "./style/bg-map.scss";

export interface BgMapProps {
  children?(map: AMap.Map): JSX.Element;
}

export interface BgMapState {
  bgMap: AMap.Map;
}

export class BgMap extends Component<BgMapProps, BgMapState> {
  constructor(props: BgMapProps) {
    super(props);
    this.state = {
      bgMap: null
    };
  }

  render() {
    const { children } = this.props;
    const { bgMap } = this.state;

    return (
      <div id="map-container" className="bg-map">
        {bgMap && children && children(bgMap)}
      </div>
    );
  }

  componentDidMount() {
    this._initMap();
  }

  componentWillUnmount() {
    this._destoryMap();
  }

  _initMap() {
    const map = new AMap.Map("map-container", {
      // center: [120.7601, 30.752215],
      // resizeEnable: true, // 是否监控地图容器尺寸变化
      mapStyle: "amap://styles/darkblue"
      // mapStyle: 'amap://styles/3fb8fe4f9319b3bdf59165ed1be5d177',
    });

    this.setState(() => {
      return {
        bgMap: map
      };
    });
  }

  _destoryMap() {
    const { bgMap } = this.state;
    if (bgMap) {
      bgMap.destroy();
      this.setState(() => ({ bgMap: null }));
    }
  }
}

export default BgMap;
