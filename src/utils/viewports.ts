/**
 *  设计稿基准尺寸
 */
export const designWidth = 1920;
/**
 * lib 计算px to rem
 * @param px 设计稿大小
 */
export const px2rem = (px: number | string) =>
  ((+px / designWidth) * 10).toFixed(4);
