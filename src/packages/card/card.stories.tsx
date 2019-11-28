import React from "react";
import Card from ".";
import Icon from "../icon";

export default {
  title: "公共组件| 卡片"
};

export const 数字卡片 = () => (
  <Card
    icon={<Icon path="assets/number-bar-icons/11.png" width="40" height="46" />}
    title="摄像头类型(种)"
    number="6"
  />
);

export const 数字卡片组 = () => (
  <Card.Group>
    <Card
      icon={
        <Icon path="assets/number-bar-icons/11.png" width="40" height="46" />
      }
      title="摄像头类型(种)"
      number="6"
    />
    <Card
      icon={
        <Icon path="assets/number-bar-icons/12.png" width="40" height="46" />
      }
      title="电量"
      number="12"
    />
  </Card.Group>
);
