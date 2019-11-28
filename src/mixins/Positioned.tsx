import React, {
  CSSProperties,
  FC,
  ReactElement,
  useState,
  useMemo
} from "react";
import { px2rem } from "@/utils/viewports";

export interface Positioned {
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

export const withPositioned = (WrappedComponent: React.ElementType) => (
  position: Positioned
) => {
  const hocComponent: FC<Positioned> = props => {
    const { style, ...rest } = props;

    return (
      <WrappedComponent
        style={{ ...style, ...getComputedStyle(position) }}
        {...rest}
      />
    );
  };

  return hocComponent;
};

export const Positioned: FC<Positioned> = props => {
  const { children, style, ...rest } = props;

  return (
    <>
      {React.cloneElement(React.Children.only(children as ReactElement), {
        style: { ...style, ...getComputedStyle(rest) }
      })}
    </>
  );
};

export const usePositioned = (initPosition: Positioned) => {
  const [position, setPosition] = useState<Positioned>(initPosition);
  const computedStyle = useMemo<CSSProperties>(
    () => getComputedStyle(position),
    [position]
  );
  return [computedStyle, setPosition];
};

const getComputedStyle = (position: Positioned) => {
  // 单位转换
  const { middle, ...rest } = position;
  const computdPosition: Positioned = {};
  for (let key in rest) {
    computdPosition[key] = `${px2rem(position[key])}rem`;
  }
  let computedStyle: CSSProperties = {
    ...computdPosition,
    position: "absolute"
  };
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
