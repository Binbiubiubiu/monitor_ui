/**
 *  设计稿基准尺寸
 */
export const designWidth = 1920;
/**
 * lib 计算px to rem
 * @param px 设计稿大小
 */
export const px2rem = (px: number | string = 0, digit = 4) =>
  +((+px / designWidth) * 10).toFixed(digit);

/**
 * lib 计算px to px
 * @param px 设计稿大小
 */
export const px2px = (px: number | string = 0, digit = 0) =>
  +((+px / designWidth) * window.innerWidth).toFixed(digit);
