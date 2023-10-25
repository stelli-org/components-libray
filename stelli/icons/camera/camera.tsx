import React from "react";
import { BaseIcon, IconColor } from "@stelli/components-library-experiment.icons.base-icon";

export type CameraProps = {
  color?: IconColor;
};

export function Camera({ color = IconColor.Primary }: CameraProps) {
  return (<BaseIcon dataTestId="camera" color={color} path="M18 3a1 1 0 011 1v2.17c1.165.412 2 1.524 2 2.83v7.99a3 3 0 01-3 3H6.02a3 3 0 01-3-3V9a3 3 0 013-3l6.979-.001L13 4a1 1 0 01.883-.993L14 3zm-4 5H6.02a1 1 0 00-1 1v7.99a1 1 0 001 1H18a1 1 0 001-1V9a1 1 0 00-1-1h.007zm-1.99 1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zM17 5h-2l-.001.999h2z" />);
}
