import React, { FC } from "react";
import classnames from "classnames";
import "./style.scss";

const defaultProps = {
  radius: false
};

export type ZaTagProps = {
  /**
   * 图标类型
   *
   * ok：正常
   * error：异常
   * danger：危险
   * warning：警告
   * disabled：警用
   * online：在线
   * outline：离线
   */
  type?:
    | "ok"
    | "error"
    | "danger"
    | "warning"
    | "disabled"
    | "online"
    | "outline";
  /** 是否圆角 */
  radius?: boolean;
};

export const ZaTag: FC<ZaTagProps> = props => {
  const { type, radius, children } = props;
  return (
    <div
      className={classnames(
        "za-tag",
        { "za-tag__radius": radius },
        type ? `za-tag__${type}` : null
      )}
    >
      {children}
    </div>
  );
};

ZaTag.defaultProps = defaultProps;

export default ZaTag;
