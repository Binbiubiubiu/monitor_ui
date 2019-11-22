import React from "react";
import { ZaNumberCard, ZaCardGroup } from ".";
import ZaIcon from "../za-icon";

export default {
  title: "公共组件| 卡片"
};

export const 数字卡片 = () => (
  <ZaNumberCard
    icon={
      <ZaIcon path="assets/number-bar-icons/11.png" width="40" height="46" />
    }
    title="摄像头类型(种)"
    number="6"
  />
);

export const 数字卡片组 = () => (
  <ZaCardGroup>
    <ZaNumberCard
      icon={
        <ZaIcon path="assets/number-bar-icons/11.png" width="40" height="46" />
      }
      title="摄像头类型(种)"
      number="6"
    />
    <ZaNumberCard
      icon={
        <ZaIcon path="assets/number-bar-icons/12.png" width="40" height="46" />
      }
      title="电量"
      number="12"
    />
  </ZaCardGroup>
);
