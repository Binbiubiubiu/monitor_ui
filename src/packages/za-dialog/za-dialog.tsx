import React, { FC, ReactNode, useMemo } from "react";
import classnames from "classnames";
import "./style.scss";
import ZaIcon from "../za-icon";
import { px2rem } from "@/utils/viewports";

const defaultProps = {
  theme: "dark"
};

interface ZaDialogPosition {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  [props: string]: any;
}

export interface ZaDialogProps {
  position?: ZaDialogPosition;
  /**
   * 弹窗的主题
   *
   * @default "dark"
   */
  theme?: string;
  /**
   *  弹窗的图标
   */
  titleIcon?: () => ReactNode;
  /**
   *  弹窗标题
   */
  title: string;
  /**
   *  弹窗顶部补充部分
   */
  headerExpandRender?: () => ReactNode;
  onClose?: () => void;
  [props: string]: any;
}

export const ZaDialog: FC<ZaDialogProps> = props => {
  const {
    position,
    theme,
    titleIcon,
    title,
    onClose,
    headerExpandRender,
    style,
    className,
    children
  } = props;

  const computedPosition = useMemo<ZaDialogPosition>(() => {
    if (!position) return {};
    for (let key in position) {
      position[key] = `${px2rem(position[key])}rem`;
    }
    return position;
  }, [position]);

  return (
    <section
      className={classnames(
        { "za-dialog__position": !!position },
        `za-dialog__theme-${theme}`,
        className
      )}
      style={{ ...computedPosition, ...style }}
    >
      <div className="za-dialog__header">
        <span className="za-dialog__title">
          {titleIcon && titleIcon()}
          {title}
        </span>
        <div className="za-dialog__expand">
          {headerExpandRender && headerExpandRender()}
        </div>
        <ZaIcon
          path="assets/za-dialog/close-icon.png"
          width="18"
          height="18"
          onClick={onClose}
        />
      </div>
      {children}
    </section>
  );
};

ZaDialog.defaultProps = defaultProps;

export default ZaDialog;
