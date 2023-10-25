import React from "react";
import { BaseIcon, IconColor } from "@stelli/components-library-experiment.icons.base-icon";

export type BellProps = {
  color?: IconColor;
};

export function Bell({ color = IconColor.Primary }: BellProps) {
  return (<BaseIcon dataTestId="bell" color={color} path="M12 0a1 1 0 011 1l.001.982A8.001 8.001 0 0120 9.92V18h1a1 1 0 01.993.883L22 19a1 1 0 01-1 1l-5 .001a4 4 0 01-8-.071l.001.07H3a1 1 0 01-.993-.883L2 19a1 1 0 011-1h1V9.92a8.001 8.001 0 017-7.938V1a1 1 0 011-1zm1.997 20l-3.996.001A2 2 0 0014 19.93zM12 3.92a6 6 0 00-6 6V18h12V9.92a6 6 0 00-5.775-5.996z" />);
}
