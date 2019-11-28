import React from "react";
import { action } from "@storybook/addon-actions";
import Icon from ".";

export default {
  title: "公共组件|图标"
};

export const 默认 = () => <Icon path="/assets/zoom-btns/qie tu 138 (1).png" />;

export const 可点击 = () => (
  <Icon
    path="/assets/zoom-btns/qie tu 138 (1).png"
    width="80"
    height="80"
    onClick={action("clicked")}
  />
);
