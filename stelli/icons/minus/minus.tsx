import React from "react";

export type MinusProps = {
  color?: string;
  size?: string;
};

export function Minus({ color = "black", size = "24px" }: MinusProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ fill: color, width: size, height: size }}
      data-testid="minus"
    >
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />
      </g>
    </svg>
  );
}
