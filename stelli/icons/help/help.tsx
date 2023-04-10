import React from "react";

export type HelpProps = {
  color?: string;
  size?: string;
};

export function Help({ color = "black", size = "24px" }: HelpProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ fill: color, width: size, height: size }}
      data-testid="help"
    >
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M4.911 4.947A10 10 0 0122 12 10 10 0 114.911 4.947zM12 4a8 8 0 100 16 8 8 0 000-16zm-.925 12.313A1 1 0 1111.85 18l-.121-.001a1 1 0 01-.654-1.686zM9 8.6a3.43 3.43 0 016.74.71 3.33 3.33 0 01-2.07 3.18 2.56 2.56 0 01-.49.15.53.53 0 00-.45.52v1.1a.89.89 0 01-.87.92l-.112-.006A.87.87 0 0111 14.48a1 1 0 010-.17V13a1.9 1.9 0 011.63-1.98 5.37 5.37 0 00.63-.28 1.66 1.66 0 00.79-1.43 1.69 1.69 0 00-3.33-.4v.18a.88.88 0 01-1.72 0 1.21 1.21 0 010-.49z" />
      </g>
    </svg>
  );
}
