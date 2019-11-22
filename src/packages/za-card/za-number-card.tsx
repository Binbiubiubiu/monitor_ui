import React, { FC, ReactNode } from "react";
import "./style.scss";

const defaultProps = {};

interface ZaNumberCardProps {
  /** 卡片图标 */
  icon: ReactNode;
  /** 卡片标题 */
  title: string | ReactNode;
  /** 卡片数字 */
  number: string | ReactNode;
}

export const ZaNumberCard: FC<ZaNumberCardProps> = props => {
  const { icon, title, number, ...rest } = props;
  return (
    <div className="za-number-card" {...rest}>
      {icon}
      <dl className="za-number-card__content">
        <dt className="za-number-card__title">{title}</dt>
        <dd>
          {typeof number === "string" ? (
            <span className="za-number-card__number led-num">{number}</span>
          ) : (
            number
          )}
        </dd>
      </dl>
    </div>
  );
};

ZaNumberCard.defaultProps = defaultProps;

export default ZaNumberCard;
