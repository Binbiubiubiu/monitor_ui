import React from "react";
import { px2rem } from "@/utils/viewports";
import { PieChart, LineChart, RadarChart } from ".";

export default {
  title: "公共组件|图表"
};

export const 饼图 = () => {
  const data = [
    {
      name: "可视化烟感",
      count: 234
    },
    {
      name: "type2",
      count: 134
    },
    {
      name: "type3",
      count: 204
    },
    {
      name: "type4",
      count: 134
    }
  ];
  return (
    <PieChart
      data={data}
      style={{
        width: `${px2rem(400)}rem`,
        height: `${px2rem(240)}rem`
      }}
    />
  );
};

export const 折线图 = () => {
  return (
    <LineChart
      xaxis={["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7"]}
      yaxis={[[200, 189, 120, 165, 145, 209, 192]]}
      style={{
        width: `${px2rem(400)}rem`,
        height: `${px2rem(190)}rem`
      }}
    />
  );
};

export const 双线折线图 = () => {
  return (
    <LineChart
      xaxis={["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7"]}
      yaxis={[
        [200, 189, 120, 165, 145, 209, 192],
        [191, 289, 320, 165, 245, 109, 92]
      ]}
      tags={["第一类型", "第二类型"]}
      style={{
        width: `${px2rem(400)}rem`,
        height: `${px2rem(190)}rem`
      }}
    />
  );
};

export const 雷达图 = () => {
  const data = [
    {
      name: "智能气感(53)",
      value: 20
    },
    {
      name: "水压液位监测(30)",
      value: 30
    },
    {
      name: "智能消火栓(15)",
      value: 22
    },
    {
      name: "智慧用电(42)",
      value: 50
    },
    {
      name: "智能烟感(142)",
      value: 12
    }
  ];
  return (
    <RadarChart
      data={data}
      style={{
        width: `${px2rem(400)}rem`,
        height: `${px2rem(160)}rem`
      }}
    />
  );
};
