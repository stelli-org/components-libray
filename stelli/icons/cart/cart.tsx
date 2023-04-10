import React from "react";

export type CartProps = {
  color?: string;
  size?: string;
};

export function Cart({ color = "black", size = "24px" }: CartProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ fill: color, width: size, height: size }}
      data-testid="cart"
    >
      <path
        d="M8 18.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5.11 3a1 1 0 01.94.656l.032.11L6.861 7H20a1 1 0 01.991 1.131l-.02.112-2 8a1 1 0 01-.858.75L18 17H8a1 1 0 01-.94-.656l-.032-.11L4.32 5H3a1 1 0 01-.993-.883L2 4a1 1 0 01.883-.993L3 3zm13.608 6H7.343l1.445 6h8.43z"
        fillRule="evenodd"
      />
    </svg>
  );
}
