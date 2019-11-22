import React from "react";
// import { action } from "@storybook/addon-actions";
import ZaTable, { ZaColumn } from ".";
import { px2px } from "@/utils/viewports";

export default {
  title: "公共组件|表格"
};

export const 默认 = () => (
  <div style={{ width: 400, height: 276 }}>
    <ZaTable height={300} headerHeight={20} rowHeight={40}>
      <ZaColumn
        label="登记时间"
        dataKey="time"
        width={px2px(100)}
        cellRenderer={({ cellData }) => (
          <span>
            {cellData ? cellData.substr(6) : ""}
            <br />
            {cellData ? cellData.substr(0, 5) : ""}
          </span>
        )}
      />
      <ZaColumn label="访客姓名" dataKey="name" flexGrow={1} width={0} />
      <ZaColumn label="性别" dataKey="sex" width={px2px(60)} />
      <ZaColumn label="联系电话" dataKey="phone" width={px2px(158)} />
      <ZaColumn label="去访小区" dataKey="house" flexGrow={1} width={0} />
    </ZaTable>
  </div>
);
