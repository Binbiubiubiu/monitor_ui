import React from "react";
// import { action } from "@storybook/addon-actions";
import ZaDialog from ".";

export default {
  title: "弹窗"
};

export const 默认 = () => (
  <ZaDialog>
    <div style={{ width: 400, height: 500 }}></div>
  </ZaDialog>
);
