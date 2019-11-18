import React from "react";
import { action } from "@storybook/addon-actions";
import ZaButton from ".";

export default {
  title: "按钮"
};

export const 默认 = () => (
  <ZaButton onClick={action("clicked")}>默认按钮</ZaButton>
);

export const 带箭头 = () => (
  <div>
    <ZaButton style={{ marginRight: 20 }} key="up" up>
      上一页
    </ZaButton>
    <ZaButton key="down" down>
      下一页
    </ZaButton>
  </div>
);

export const 禁用 = () => <ZaButton disabled>禁用按钮</ZaButton>;

export const 激活 = () => <ZaButton actived>激活按钮</ZaButton>;
