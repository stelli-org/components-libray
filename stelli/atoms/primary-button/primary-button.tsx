import React, { ReactNode, ReactElement } from "react";
import styles from "./primary-button.module.css";

export type PrimaryButtonProps = {
  children?: ReactNode;
  icon: ReactElement;
};

export function PrimaryButton({ children, icon }: PrimaryButtonProps) {
  return (
    <button className={styles.primaryButton}>
      {children}
      {icon}
    </button>
  );
}
