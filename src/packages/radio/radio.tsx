import React, { FC } from "react";
import classnames from "classnames";
import "./style.scss";
import RadioGroup, { RadioGroupProps } from "./radio-group";

const defaultProps = {
  disabled: false
};

export interface RadioProps {
  /** 单选组选中项 */
  checked?: string | number;
  /** 单选标签 */
  label?: string;
  /** 是否禁用
   *
   *  @default false
   */
  disabled?: boolean;
  /** 原生name属性 */
  name?: string;
  [props: string]: any;
}

export const Radio: FC<RadioProps> & { Group: FC<RadioGroupProps> } = props => {
  const { checked, name, label, disabled, onChecked, children } = props;

  return (
    <label
      className={classnames("za-radio", {
        "za-radio__checked": checked === label
      })}
    >
      <input
        className="za-radio__input"
        value={label}
        type="radio"
        name={name}
        disabled={disabled}
        onChange={e => {
          onChecked(e.target.value);
        }}
      />
      {children || label}
    </label>
  );
};

Radio.defaultProps = defaultProps;

Radio.Group = RadioGroup;

export default Radio;
