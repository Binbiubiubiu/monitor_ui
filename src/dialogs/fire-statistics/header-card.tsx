import React from "react";
import { Row } from "@/packages/layout";
import Icon from "@/packages/icon";
import Card from "@/packages/card";

export const HeaderCard = (props: any) => (
  <Row gutter={10} {...props}>
    <Card
      icon={
        <Icon path="/assets/number-bar-icons/Q087.png" width="36" height="49" />
      }
      number="1"
      title="火险天气等级(级)"
    />
    <Card
      icon={
        <Icon path="/assets/number-bar-icons/Q088.png" width="46" height="46" />
      }
      number="120"
      title="智慧消防设备(个)"
    />
    <Card
      icon={
        <Icon path="/assets/number-bar-icons/Q089.png" width="40" height="47" />
      }
      number="534"
      title="24小时系统防护指数(次)"
    />
  </Row>
);

export default HeaderCard;
