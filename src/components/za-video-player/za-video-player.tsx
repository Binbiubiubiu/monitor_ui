import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./style.scss";
import { shallowMerge } from "@/utils/data";
import defaultVideoPlayerConfig from "./default-config";
import { analyzeTypeOfVideo, isVaildURL } from "./util";
import { px2rem } from "@/utils/viewports";

const defaultProps = {
  width: 400,
  height: 240
};

export interface ZaVideoPlayerProps {
  /**
   * 视频播放路径
   */
  src: string;
  /** 图标宽度
   *
   * @default 400
   */
  width?: number | string;
  /** 图标高度
   *
   * @default 240
   */
  height?: number | string;
  /**
   * 视频覆盖默认配置一些设置
   */
  config?: object;
  [props: string]: any;
}

type ZaVideoPlayerState = {
  isVaildURL: boolean;
  error: boolean;
};

class ZaVideoPlayer extends Component<ZaVideoPlayerProps, ZaVideoPlayerState> {
  player: any;
  videoNode: React.RefObject<HTMLVideoElement>;

  static defaultProps = defaultProps;

  constructor(props: Readonly<ZaVideoPlayerProps>) {
    super(props);
    this.videoNode = React.createRef();
    this.state = {
      isVaildURL: true,
      error: false
    };
  }

  componentDidMount() {
    const { src, config } = this.props;

    // 验证url 是否正确
    if (!isVaildURL(src)) {
      this.setState({
        error: true,
        isVaildURL: false
      });
      return;
    }

    const playerConfig = shallowMerge(defaultVideoPlayerConfig, config, {
      sources: [
        {
          src,
          type: analyzeTypeOfVideo(src)
        }
      ]
    });
    // console.log(playerConfig);
    // instantiate Video.js
    this.player = videojs(this.videoNode.current, playerConfig);
    this.player.on("error", this.addVideoPlayerErrorListener);
  }

  /** videojs  视频流获取失败 错误处理 */
  addVideoPlayerErrorListener = () => {
    this.setState(() => {
      return { error: true };
    });
  };

  componentWillMount() {
    if (this.player) {
      this.player.off("error", this.addVideoPlayerErrorListener);
      this.player.dispose();
    }
  }

  renderError() {
    const { isVaildURL } = this.state;
    return (
      <div className="video-player__error">
        {isVaildURL ? "视频播放异常" : "未安装"}
      </div>
    );
  }

  render() {
    const { width, height } = this.props;
    const { error } = this.state;

    return (
      <div
        className="video-player__wrapper"
        style={{
          width: `${px2rem(width)}rem`,
          height: `${px2rem(height)}rem`
        }}
      >
        <video ref={this.videoNode} className="video-js video-player"></video>
        {error && this.renderError()}
      </div>
    );
  }
}

export default ZaVideoPlayer;
