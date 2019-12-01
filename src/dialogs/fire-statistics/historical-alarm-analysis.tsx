import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import Dialog from "@/packages/dialog";
import Icon from "@/packages/icon";
import { LineChart, ChartTitle } from "@/packages/chart";
import { px2rem } from "@/utils/viewports";
import { withPositioned, PositionedProps } from "@/mixins/Positioned";
import { Row } from "@/packages/layout";
import { Radio } from "@/packages/radio";
import useDialogShow from "@/mixins/useDialogShow";

const TitleIcon = (
  <Icon
    className="m-r-8"
    path="/assets/dialog/Q085.png"
    width="15"
    height="15"
  />
);

const Content: FC<PositionedProps> = withPositioned(({ ...rest }) => {
  return (
    <Dialog titleIcon={TitleIcon} title="历史告警分析" {...rest}>
      <Row align="middle" justify="space-between" gutter={20}>
        <ChartTitle title="历史告警次数：" number="2453" />
        <Radio.Group value="3">
          <Radio label="3">近3日</Radio>
          <Radio label="7">近7日</Radio>
          <Radio label="30">近30日</Radio>
        </Radio.Group>
      </Row>
      <LineChart
        xaxis={["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7"]}
        yaxis={[[200, 189, 120, 165, 145, 209, 192]]}
        style={{
          width: `${px2rem(400)}rem`,
          height: `${px2rem(184)}rem`
        }}
      />
    </Dialog>
  );
})({
  left: 24,
  top: 390
});

const ZoomBtn: FC<PositionedProps> = withPositioned(({ ...rest }) => {
  return (
    <Icon
      path="/assets/zoom-btns/qie tu 138 (13).png"
      width="50"
      height="50"
      {...rest}
    />
  );
})({
  left: 24,
  top: 390
});

export default () => {
  const [showDialogs, setShowDialogs] = useDialogShow(false);

  return (
    <>
      {!showDialogs && <ZoomBtn onClick={() => setShowDialogs(true)} />}
      <CSSTransition
        in={showDialogs}
        timeout={400}
        unmountOnExit
        classNames="fade-left"
      >
        <Content onMinimize={() => setShowDialogs(false)} />
      </CSSTransition>
    </>
  );
};
