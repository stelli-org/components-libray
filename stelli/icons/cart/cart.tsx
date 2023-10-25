import React from "react";
import { BaseIcon, IconColor } from "@stelli/components-library-experiment.icons.base-icon";

export type CartProps = {
  color?: IconColor;
};

export function Cart({ color = IconColor.Primary }: CartProps) {
  return (<BaseIcon dataTestId="cart" color={color} path="M8 18.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5.11 3a1 1 0 01.94.656l.032.11L6.861 7H20a1 1 0 01.991 1.131l-.02.112-2 8a1 1 0 01-.858.75L18 17H8a1 1 0 01-.94-.656l-.032-.11L4.32 5H3a1 1 0 01-.993-.883L2 4a1 1 0 01.883-.993L3 3zm13.608 6H7.343l1.445 6h8.43z" />);
}
