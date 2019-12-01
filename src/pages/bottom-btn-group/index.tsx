import React, { FC } from "react";
import "./style/bottom-btn-group.scss";
import { withPositioned } from "@/mixins/Positioned";
import Icon from "@/packages/icon";

export interface BottomBtnGroupProps {}

export const BottomBtnGroup: FC<BottomBtnGroupProps> = withPositioned(props => {
  const { children, ...rest } = props;

  return (
    <section className="bottom-btn-group" {...rest}>
      {children}
      <button className="logOut-btn">
        <Icon path="/assets/bottom-btn-icons/Q040.png" width="18" height="18" />
      </button>
    </section>
  );
})({
  bottom: 94,
  middle: true
});

export default BottomBtnGroup;
