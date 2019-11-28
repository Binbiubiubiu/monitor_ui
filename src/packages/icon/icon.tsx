import React, { FC, useMemo, MouseEventHandler } from "react";
import classnames from "classnames";
import "./style.scss";
import { px2rem } from "@/utils/viewports";

const defaultProps = {
  width: 40,
  height: 40
};

export interface IconProps {
  /** 图标路径 */
  path: string;
  /** 图标宽度
   *
   * @default 40
   */
  width?: number | string;
  /** 图标高度
   *
   * @default 40
   */
  height?: number | string;
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLImageElement>;
  [prop: string]: any;
}

export const Icon: FC<IconProps> = props => {
  const {
    path,
    width,
    height,
    onClick,
    position,
    className,
    style,
    ...rest
  } = props;

  const computedSize = useMemo(
    () => ({
      width: `${px2rem(width)}rem`,
      height: `${px2rem(height)}rem`
    }),
    [width, height]
  );

  return (
    <img
      src={path}
      style={{ ...style, ...computedSize }}
      className={classnames(
        "za-icon",
        { "za-icon__clickable": !!onClick },
        className
      )}
      onClick={onClick}
      {...rest}
      alt=""
    />
  );
};

Icon.defaultProps = defaultProps;

// export const component = ZaIcon;
export default Icon;
