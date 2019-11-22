import React from "react";
// import { action } from "@storybook/addon-actions";
import ZaLoading from ".";

export default {
  title: "公共组件|加载动画"
};

export const 小球 = () => <ZaLoading type="balls" />;

export const 柱子 = () => <ZaLoading type="bars" />;

export const 泡泡 = () => <ZaLoading type="bubbles" />;

export const 方块 = () => <ZaLoading type="cubes" />;

export const 左右弹跳 = () => <ZaLoading type="cylon" />;

export const 旋转 = () => <ZaLoading type="spin" />;

export const 旋转泡泡 = () => <ZaLoading type="spin-bubbles" />;

export const 旋转方块 = () => <ZaLoading type="spokes" />;
