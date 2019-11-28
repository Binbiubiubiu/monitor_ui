import React, { FC } from "react";

const defaultProps = {
  gap: 10
};

export interface CardGroupProps {
  /** 间隔 */
  gap?: string | number;
}

export const CardGroup: FC<CardGroupProps> = props => {
  const { gap, children } = props;
  return (
    <section>
      {React.Children.map(children, (child: any, i) => {
        return React.cloneElement(child, {
          style: { marginLeft: i === 0 ? 0 : gap }
        });
      })}
    </section>
  );
};

CardGroup.defaultProps = defaultProps;

export default CardGroup;
