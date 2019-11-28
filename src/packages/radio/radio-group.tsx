import React, { FC, useState, useEffect } from "react";
import { randomString } from "@/utils/viewports";
import "./style";

export interface RadioGroupProps {
  /** 单选组选中的值 */
  value: string | number;
  /** 单选组变化监听 */
  onChange?: (val: string | number) => void;
  [props: string]: any;
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const { value, onChange, children } = props;
  const [checked, setChecked] = useState<typeof value>(value);
  const [randomName] = useState(randomString(8));

  useEffect(() => {
    onChange && onChange(checked);
  }, [checked]);

  return (
    <div className="za-radio-group">
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          onChecked: (val: typeof value) => setChecked(val),
          checked,
          name: child.props.name || randomName
        });
      })}
    </div>
  );
};

export default RadioGroup;
