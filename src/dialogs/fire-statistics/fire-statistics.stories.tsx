import React from "react";
import SmartFireControl from "./smart-fire-control";
import HistoricalAlarmAnalysis from "./historical-alarm-analysis";
import CommunityEquipment from "./community-equipment";
import HeaderCard from "./header-card";

export default {
  title: "弹窗|消防数据统计"
};

export const 顶部统计 = () => <HeaderCard />;

export const 智慧消防 = () => <SmartFireControl />;

export const 历史告警分析 = () => <HistoricalAlarmAnalysis />;

export const 小区设备安装数量 = () => <CommunityEquipment />;
