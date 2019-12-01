import React, { FC } from "react";
import "./style/inline-card.scss";

const defaultProps = {};

export interface InlineCardProps {
  /** 卡片组内容 */
  items: Array<{ title: string; number: string | number }>;
}

export const InlineCard: FC<InlineCardProps> = props => {
  const { items, ...rest } = props;
  return (
    <ul className="za-inline-card" {...rest}>
      {items.map(({ title, number }) => {
        return (
          <li key={title} className="za-inline-card__item">
            <div className="za-inline-card__title">{title}</div>
            <div className="led-num">{number}</div>
          </li>
        );
      })}
    </ul>
  );
};

InlineCard.defaultProps = defaultProps;

export default InlineCard;
