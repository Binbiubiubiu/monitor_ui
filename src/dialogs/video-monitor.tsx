import React, { Component } from "react";
import ZaIcon from "../components/za-icon";

export class VideoMonitor extends Component {
  public render() {
    // const titleIcon = (
    //   <ZaIcon
    //     className="m-r-8"
    //     path="assets/za-dialog/Q017.png"
    //     width="16"
    //     height="18"
    //   />
    // );
    // const headerExpandRender = () => <ZaButton>近七天记录</ZaButton>;
    // return (
    //   <ZaDialog
    //     titleIcon={titleIcon}
    //     title="视频分析"
    //     headerExpandRender={headerExpandRender}
    //     onClose={}
    //   >
    //     <div style={{ width: 400, height: 500 }}></div>
    //   </ZaDialog>
    // );
    return (
      <ZaIcon
        className="m-r-8"
        path="assets/za-dialog/Q017.png"
        width="16"
        height="18"
      />
    );
  }
}

export default VideoMonitor;
