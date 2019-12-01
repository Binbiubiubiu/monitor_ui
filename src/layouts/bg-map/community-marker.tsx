import { FC } from "react";
import AMap from "AMap";
import "./style/community.scss";

export interface CommunityMarkerProps {
  /** 地图上下文 */
  map: AMap.Map;
  // [props: string]: any;
}

export const CommunityMarker: FC<CommunityMarkerProps> = props => {
  const { map } = props;

  const mockData = [
    {
      houseId: 1,
      houseName: "陈庄新苑",
      address: "浙江省杭州市桐庐县陈庄新苑(陈庄支路南50米)",
      doorType: "东门、南门、西门",
      wyPhone: "84562454",
      xfPerson: "李阔",
      xfPhone: "18569541524",
      xfJob: "巡更组长",
      houseLongitude: 119.771098,
      houseAtitude: 29.859046,
      num1: 14,
      num2: 56,
      num3: 489,
      num4: 129,
      num5: 56,
      num6: 321,
      num7: 332,
      num8: 82
    },
    {
      houseId: 2,
      houseName: "汇金江南府",
      address: "杭州市桐庐县江南镇888号",
      doorType: "东门、北门、西门、南门",
      wyPhone: "85421542",
      xfPerson: "刘清松",
      xfPhone: "13548957487",
      xfJob: "巡更组长",
      houseLongitude: 119.775534,
      houseAtitude: 29.855347,
      num1: 21,
      num2: 76,
      num3: 449,
      num4: 132,
      num5: 76,
      num6: 308,
      num7: 339,
      num8: 98
    }
  ];

  if (!map) return null;

  mockData.forEach(item =>
    _createMarker(map, {
      lng: item.houseLongitude,
      lat: item.houseAtitude,
      tagName: item.houseName
    })
  );
  map.setFitView();
  return null;
};

const _createMarker = (map: AMap.Map, extra: any) => {
  const { lng, lat, tagName } = extra;

  return new AMap.Marker({
    map,
    content: `<div class="custom-house-marker">${tagName}</div>`, // 自定义点标记覆盖物内容
    position: [+lng, +lat], // 基点位置
    offset: new AMap.Pixel(16, -24) // 相对于基点的偏移位置
  });
};

export default CommunityMarker;
