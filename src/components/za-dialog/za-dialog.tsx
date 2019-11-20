import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import "./style.scss";
import ZaIcon from "../za-icon/za-icon";

const defaultProps = {
  theme: "dark"
};

export interface ZaDialogProps {
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
  onClose?: () => void;
}

export const ZaDialog: FC<ZaDialogProps> = props => {
  const {
    theme,
    titleIcon,
    title,
    onClose,
    headerExpandRender,
    children
  } = props;

  return (
    <section className={classnames(`za-dialog__theme-${theme}`)}>
      <div className="za-dialog__header">
        <span className="za-dialog__title">
          {titleIcon}
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
