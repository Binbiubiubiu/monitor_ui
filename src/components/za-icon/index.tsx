import React, { FC, useMemo, MouseEventHandler } from "react";
import classnames from "classnames";
import "./style.scss";
import { px2rem } from "@/utils/viewports";
import { shallowMerge } from "@/utils/data";

const defaultProps = {
  width: 40,
  height: 40
};

type ZaIconProps = {
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
};

const ZaIcon: FC<ZaIconProps> = props => {
  const { path, width, height, onClick, ...rest } = shallowMerge(
    defaultProps,
    props
  );

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
      style={{ ...computedSize }}
      className={classnames({ "za-icon__clickable": !!onClick })}
      {...rest}
    />
  );
};

// ZaIcon.defaultProps = defaultProps;

// export const component = ZaIcon;
export default ZaIcon;
