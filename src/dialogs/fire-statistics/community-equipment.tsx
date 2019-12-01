import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import Dialog from "@/packages/dialog";
import Icon from "@/packages/icon";
import { RadarChart } from "@/packages/chart";
import { px2rem } from "@/utils/viewports";
import { withPositioned, PositionedProps } from "@/mixins/Positioned";
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
    <Dialog
      titleIcon={TitleIcon}
      title={
        <>
          小区设备安装数量 (个)&nbsp;&nbsp;
          <i>TOP5</i>
        </>
      }
      {...rest}
    >
      <RadarChart
        data={[
          {
            name: "智能气感(53)",
            value: 20
          },
          {
            name: "水压液位监测(30)",
            value: 30
          },
          {
            name: "智能消火栓(15)",
            value: 22
          },
          {
            name: "智慧用电(42)",
            value: 50
          },
          {
            name: "智能烟感(142)",
            value: 12
          }
        ]}
        style={{
          width: `${px2rem(400)}rem`,
          height: `${px2rem(229)}rem`
        }}
      />
    </Dialog>
  );
})({
  left: 24,
  top: 672
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
  top: 672
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
