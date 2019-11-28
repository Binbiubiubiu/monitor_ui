import React, { FC } from "react";
import ReactSVG from "react-svg";

const defaultProps = {
  type: "bars"
};

export type ZaLoadingProps = {
  /**
   * 加载类型
   *
   * @default "loading-bars"
   */
  icon?: string;
  [props: string]: any;
};

export const ZaLoading: FC<ZaLoadingProps> = props => {
  const { type, ...rest } = props;

  return <ReactSVG src={require(`./loading-${type}.svg`)} {...rest} />;
};

ZaLoading.defaultProps = defaultProps;

export default ZaLoading;
