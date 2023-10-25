import React from "react";
import { BaseIcon, IconColor } from "@stelli/components-library-experiment.icons.base-icon";

export type ClockProps = {
  color?: IconColor;
};

export function Clock({ color = IconColor.Primary }: ClockProps) {
  return (<BaseIcon dataTestId="clock" color={color} path="M12 2.5a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2.17a1 1 0 011 1V12h2a1 1 0 01.993.883L16 13a1 1 0 01-1 1h-3a1 1 0 01-1-1V7.67a1 1 0 011-1z" />);
}
