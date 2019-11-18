import React, { FC } from "react";
import "./style.scss";

type ZaDialogProps = {};

export const ZaDialog: FC<ZaDialogProps> = props => {
  const { children } = props;

  return <section className="dialog__theme-dark">{children}</section>;
};

export default ZaDialog;
