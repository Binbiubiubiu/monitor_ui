import React, { FC, cloneElement } from "react";
import "./style.scss";

const defaultProps = {
  gap: 10
};

interface NumberCardProps {
  /** 间隔 */
  gap?: string | number;
}

export const ZaCardGroup: FC<NumberCardProps> = props => {
  const { gap, children } = props;
  return (
    <section>
      {React.Children.map(children, (child: any, i) => {
        return cloneElement(child, { style: { marginLeft: i == 0 ? 0 : gap } });
      })}
    </section>
  );
};

ZaCardGroup.defaultProps = defaultProps;

export default ZaCardGroup;
