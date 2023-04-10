import React, { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
};

export function Button({ children, icon }: ButtonProps) {
  const className = `${styles.button} ${icon ? styles.withIcon : ""}`;

  return (
    <button className={className}>
      {children}
      {icon ? icon : null}
    </button>
  );
}
