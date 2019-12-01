import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import Dialog from "@/packages/dialog";
import Icon from "@/packages/icon";
import { LineChart } from "@/packages/chart";
import { px2rem } from "@/utils/viewports";
import { withPositioned, PositionedProps } from "@/mixins/Positioned";
import { Row } from "@/packages/layout";
import { Radio } from "@/packages/radio";
import useDialogShow from "@/mixins/useDialogShow";

const TitleIcon = (
  <Icon
    className="m-r-8"
    path="/assets/dialog/xiaoqu15.png"
    width="18"
    height="18"
  />
);

const Content: FC<PositionedProps> = withPositioned(({ ...rest }) => {
  return (
    <Dialog titleIcon={TitleIcon} title="投诉排行" {...rest}>
      <Row align="middle" justify="end" gutter={20}>
        <Radio.Group value="3">
          <Radio label="3">类型</Radio>
          <Radio label="7">幢</Radio>
          <Radio label="30">时间</Radio>
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
  top: 678
});

const ZoomBtn: FC<PositionedProps> = withPositioned(({ ...rest }) => {
  return (
    <Icon
      path="/assets/zoom-btns/guan15.png"
      width="50"
      height="50"
      {...rest}
    />
  );
})({
  left: 24,
  top: 678
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
