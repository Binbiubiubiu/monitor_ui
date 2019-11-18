import React from "react";
import ZaVideoPlayer from ".";

export default {
  title: "视频播放器"
};

export const 默认 = () => (
  <ZaVideoPlayer src="http://hls01open.ys7.com/openlive/eb6cb5e001e64c568386ad00e136d751.m3u8" />
);
/** 视频类型不正确、视频格式不正确 都认为未安装情况
 */
export const 未安装 = () => (
  <ZaVideoPlayer src="http://hls01open.ys7.com/openlive/eb6cb5e001e64c568386ad00e136d751.错误类型" />
);

/** 视频地址没问题， 但是视频流获取不到播放不了
 */
export const 播放失败 = () => <ZaVideoPlayer src="http://错误地址.m3u8" />;
