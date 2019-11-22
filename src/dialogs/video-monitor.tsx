import React, { useContext, FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ZaDialog from "@/packages/za-dialog";
import ZaIcon from "@/packages/za-icon";
import { ZaPieChart } from "@/packages/za-chart";
import { px2rem } from "@/utils/viewports";
import Positioned from "@/components/Positioned";

const TitleIcon = () => (
  <ZaIcon
    className="m-r-8"
    path="assets/za-dialog/Q017.png"
    width="16"
    height="18"
  />
);

export const VideoMonitorDialogs: any = ({ onClose }: any) => {
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

  const { setShowDialogs } = useContext(dialogContext);
  return (
    <ZaDialog
      position={{ left: 23, top: 108 }}
      titleIcon={TitleIcon}
      title="视频分析"
      onClose={() => setShowDialogs(false)}
    >
      <ZaPieChart
        data={data}
        style={{
          width: `${px2rem(400)}rem`,
          height: `${px2rem(236)}rem`
        }}
      />
    </ZaDialog>
  );
};

let ZoomBtn = ({ ...rest }) => {
  const { setShowDialogs } = useContext(dialogContext);

  return (
    <ZaIcon
      path="/assets/zoom-btns/qie tu 138 (1).png"
      width="50"
      height="50"
      onClick={() => setShowDialogs(true)}
      {...rest}
    />
  );
};
ZoomBtn = Positioned(ZoomBtn)({ left: 24, top: 108 });

const dialogContext = React.createContext<any>(null);

const VideoMonitor: FC = () => {
  const [showButton, setShowButton] = useState(true);
  const [showDialogs, setShowDialogs] = useState(false);

  return (
    <dialogContext.Provider
      value={{
        setShowButton,
        setShowDialogs
      }}
    >
      {showButton && <ZoomBtn />}
      <CSSTransition
        in={showDialogs}
        timeout={400}
        unmountOnExit
        classNames="fade-left"
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <VideoMonitorDialogs />
      </CSSTransition>
    </dialogContext.Provider>
  );
};

export default VideoMonitor;
