import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Dialog, { DialogProps } from "@/packages/dialog";
import Icon from "@/packages/icon";
import { PieChart } from "@/packages/chart";
import { px2rem } from "@/utils/viewports";
import { usePositioned } from "@/mixins/Positioned";

const TitleIcon = (
  <Icon
    className="m-r-8"
    path="assets/za-dialog/Q017.png"
    width="16"
    height="18"
  />
);

const Content: FC<Pick<DialogProps, "onClose">> = ({ ...rest }) => {
  const data = [
    {
      name: "可视化烟感",
      count: 234
    },
    {
      name: "type2",
      count: 134
    },
    {
      name: "type3",
      count: 204
    },
    {
      name: "type4",
      count: 134
    }
  ];

  const [computedPosition] = usePositioned({
    left: 24,
    top: 108
  });

  return (
    <Dialog
      positon={{ left: 24, top: 108 }}
      titleIcon={TitleIcon}
      title="视频分析"
      style={computedPosition}
      {...rest}
    >
      <PieChart
        data={data}
        style={{
          width: `${px2rem(400)}rem`,
          height: `${px2rem(236)}rem`
        }}
      />
    </Dialog>
  );
};

const ZoomBtn: FC<Pick<DialogProps, "onClick">> = ({ ...rest }) => {
  const [computedPosition] = usePositioned({
    left: 24,
    top: 108
  });
  return (
    <Icon
      path="/assets/zoom-btns/qie tu 138 (1).png"
      width="50"
      height="50"
      style={computedPosition}
      {...rest}
    />
  );
};

export default () => {
  const [showDialogs, setShowDialogs] = useState(false);

  return (
    <>
      {!showDialogs && <ZoomBtn onClick={() => setShowDialogs(true)} />}
      <CSSTransition
        in={showDialogs}
        timeout={400}
        unmountOnExit
        classNames="fade-left"
      >
        <Content onClose={() => setShowDialogs(false)} />
      </CSSTransition>
    </>
  );
};
