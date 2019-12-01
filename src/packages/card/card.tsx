import React, { FC, ReactNode, isValidElement } from "react";
import "./style/card.scss";

const defaultProps = {};

export interface CardProps {
  /** 卡片图标 */
  icon: ReactNode;
  /** 卡片标题 */
  title: string | ReactNode;
  /** 卡片数字 */
  number: string | ReactNode;
  [props: string]: any;
}

export const Card: FC<CardProps> = props => {
  const { icon, title, number, ...rest } = props;
  return (
    <div className="za-card" {...rest}>
      {icon}
      <dl className="za-card__content">
        <dt className="za-card__title">{title}</dt>
        <dd>
          {isValidElement(number) ? (
            number
          ) : (
            <span className="za-card__number led-num">{number}</span>
          )}
        </dd>
      </dl>
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
