import React from "react";
import Card, { InlineCard } from ".";
import Icon from "../icon";

export default {
  title: "公共组件|卡片"
};

export const 默认 = () => (
  <Card
    icon={<Icon path="assets/number-bar-icons/11.png" width="40" height="46" />}
    title="摄像头类型(种)"
    number="6"
  />
);

export const 内联样式 = () => (
  <InlineCard
    items={[
      {
        title: "消防联网设备总数(个)",
        number: 230
      },
      {
        title: "设备完好率(%)",
        number: 100
      }
    ]}
  />
);
