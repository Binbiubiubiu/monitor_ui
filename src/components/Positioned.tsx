import React, { ElementType, CSSProperties } from "react";
import { px2rem } from "@/utils/viewports";

interface PositionedProps {
  /** 左边距离 设计稿尺寸 */
  left?: string | number;
  /** 右边距离 设计稿尺寸 */
  right?: string | number;
  /** 上边距离 设计稿尺寸 */
  top?: string | number;
  /** 下边距离 设计稿尺寸 */
  bottom?: string | number;
  /** 是否水平居中 */
  middle?: boolean;
  [props: string]: any;
}

export default (WrappedComponent: ElementType) => (
  position: PositionedProps
) => {
  const hocComponent = (props: any) => {
    const { style, ...rest } = props;

    return (
      <WrappedComponent style={getComputedStyle(position, style)} {...rest} />
    );
  };

  return hocComponent;
};

const getComputedStyle = (position: PositionedProps, style: CSSProperties) => {
  // 单位转换
  const { middle, ...rest } = position;
  const computdPosition: PositionedProps = {};
  for (let key in rest) {
    computdPosition[key] = `${px2rem(position[key])}rem`;
  }
  let computedStyle: CSSProperties = {
    ...style,
    ...computdPosition,
    position: "absolute"
  };
  console.log(middle);
  // 是否水平剧中
  if (middle) {
    computedStyle = {
      ...computedStyle,
      left: "50%",
      transform: "translateX(-50%)"
    };
  }
  return computedStyle;
};
