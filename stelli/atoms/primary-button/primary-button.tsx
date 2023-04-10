import React, { ReactNode } from "react";
import styles from "./primary-button.module.css";
import { Minus } from "@stelli/components-library-experiment.icons.minus";
import { Help } from "@stelli/components-library-experiment.icons.help";

export type PrimaryButtonProps = {
  children?: ReactNode;
  iconName: "minus" | "help";
};

const iconsMap = {
  minus: Minus,
  help: Help,
};

export function PrimaryButton({ children, iconName }: PrimaryButtonProps) {
  const Icon = iconsMap[iconName] || Minus;

  return (
    <button className={styles.primaryButton}>
      {children}
      {<Icon />}
    </button>
  );
}
