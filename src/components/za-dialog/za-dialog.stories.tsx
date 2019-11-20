import React from "react";
import { action } from "@storybook/addon-actions";
import ZaIcon from "../za-icon";
import ZaButton from "../za-button";
import ZaDialog from "./za-dialog";

export default {
  title: "公共组件|弹窗"
};

export const 默认 = () => {
  const titleIcon = (
    <ZaIcon
      className="m-r-8"
      path="assets/za-dialog/Q017.png"
      width="16"
      height="18"
    />
  );
  const headerExpandRender = () => <ZaButton>近七天记录</ZaButton>;
  return (
    <ZaDialog
      titleIcon={titleIcon}
      title="视频分析"
      headerExpandRender={headerExpandRender}
      onClose={action("dialog close")}
    >
      <div style={{ width: 400, height: 500 }}></div>
    </ZaDialog>
  );
};
