import React from "react";
import { BaseIcon, IconColor } from "@stelli/components-library-experiment.icons.base-icon";

export type MinusProps = {
  color?: IconColor;
};

export function Minus({ color = IconColor.Primary }: MinusProps) {
  return (<BaseIcon dataTestId="minus" color={color} path="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />);
}
