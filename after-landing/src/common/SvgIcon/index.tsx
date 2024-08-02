import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/landing-page-landy/img/svg/${src}`} alt={src} width={width} height={height} />
);
