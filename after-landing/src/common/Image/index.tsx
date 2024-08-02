import { ImageProps as ImageProps } from "../types";

export const Image = ({ src, width, height }: ImageProps) => (
  <img src={`/landing-page-landy/img/${src}`} alt={src} width={width} height={height} />
);
