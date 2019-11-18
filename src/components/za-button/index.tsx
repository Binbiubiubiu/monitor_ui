import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

import "./style.scss";
import { shallowMerge } from "@/utils/data";

export const defaultProps = {
  up: false,
  down: false,
  actived: false,
  disabled: false
};

type ZaButtonProps = {
  /**是否显示左边箭头
   *
   * @default false
   */
  up?: boolean;
  /**是否显示右边箭头
   *
   * @default false
   */
  down?: boolean;
  /**是否激活
   *
   * @default false
   */
  actived?: boolean;
  /**是否禁用
   *
   * @default false
   */
  disabled?: boolean;
  /**点击事件 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  [prop: string]: any;
};

export const ZaButton: FC<ZaButtonProps> = props => {
  const {
    up = false, // 左箭头
    down = false, // 右箭头
    actived = false, // 按钮激活
    disabled = false, // 按钮禁用
    onClick, // 点击事件
    children,
    ...rest
  } = shallowMerge(defaultProps, props);

  return (
    <button
      // tslint:disable-next-line: jsx-no-multiline-js
      className={classNames("za-button", {
        "za-button__up": up,
        "za-button__down": down,
        "za-button__actived": actived
      })}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...rest}
    >
      {children}
    </button>
  );
};

// ZaButton.defaultProps = defaultProps;

export default ZaButton;
