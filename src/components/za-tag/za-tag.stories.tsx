import React from "react";
import ZaTag from ".";

export default {
  title: "标签"
};

export const 默认 = () => <ZaTag>默认标签</ZaTag>;

export const 圆角 = () => <ZaTag radius>圆角标签</ZaTag>;

export const 正常 = () => (
  <ZaTag type="ok" radius>
    正常
  </ZaTag>
);

export const 异常 = () => (
  <ZaTag type="error" radius>
    异常
  </ZaTag>
);

export const 警告 = () => (
  <ZaTag type="warning" radius>
    警告
  </ZaTag>
);

export const 禁用 = () => (
  <ZaTag type="disabled" radius>
    禁用
  </ZaTag>
);

export const 在线 = () => (
  <ZaTag type="online" radius>
    在线
  </ZaTag>
);

export const 离线 = () => (
  <ZaTag type="outline" radius>
    离线
  </ZaTag>
);
