import React, { Fragment } from "react";
import { withPositioned } from "@/mixins/Positioned";
import HeaderCard from "@/dialogs/fire-statistics/header-card";
import SmartFireControl from "@/dialogs/fire-statistics/smart-fire-control";
import HistoricalAlarmAnalysis from "@/dialogs/fire-statistics/historical-alarm-analysis";
import CommunityEquipment from "@/dialogs/fire-statistics/community-equipment";

const PositionedHeaderCard = withPositioned(HeaderCard)({
  middle: true,
  top: 120
});

export default () => {
  return (
    <Fragment>
      <PositionedHeaderCard />
      <SmartFireControl />
      <HistoricalAlarmAnalysis />
      <CommunityEquipment />
    </Fragment>
  );
};
