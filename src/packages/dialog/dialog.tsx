import React, { FC, ReactNode, MouseEventHandler } from "react";
import classnames from "classnames";
import "./style";
import Icon from "../icon";

const defaultProps = {
  theme: "dark"
};

export interface DialogProps {
  /**
   * 弹窗的主题
   *
   * @default "dark"
   */
  theme?: string;
  /**
   *  弹窗的图标
   */
  titleIcon?: ReactNode;
  /**
   *  弹窗标题
   */
  title: string;
  /**
   *  弹窗顶部补充部分
   */
  headerExpandRender?: () => ReactNode;
  /** 弹窗关闭回调 */
  onClose?: MouseEventHandler<Element>;
  [props: string]: any;
}

export const Dialog: FC<DialogProps> = props => {
  const {
    theme,
    titleIcon,
    title,
    onClose,
    headerExpandRender,
    style,
    className,
    children
  } = props;
  // (titleIcon as { path: "" }).path = "";

  return (
    <section
      className={classnames(`za-dialog__theme-${theme}`, className)}
      style={style}
    >
      <div className="za-dialog__header">
        <span className="za-dialog__title">
          {titleIcon && titleIcon}
          {title}
        </span>
        <div className="za-dialog__expand">
          {headerExpandRender && headerExpandRender()}
        </div>
        <Icon
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

Dialog.defaultProps = defaultProps;

export default Dialog;
