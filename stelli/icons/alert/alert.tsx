import React from "react";

export type AlertProps = {
  color?: string;
  size?: string;
};

export function Alert({ color = "black", size = "24px" }: AlertProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ fill: color, width: size, height: size }}
      data-testid="alert"
    >
      <path
        d="M12 2.176a2 2 0 011.779 1.086l8.669 16.818A2 2 0 0120.67 23H3.332a2 2 0 01-1.78-2.918L10.22 3.264A2 2 0 0112 2.176zm0 2L3.328 21h17.344zM12 17a1 1 0 110 2 1 1 0 010-2zm0-6.94a1 1 0 011 1v3.88a1 1 0 01-2 0v-3.88a1 1 0 011-1z"
        fillRule="evenodd"
      />
    </svg>
  );
}
