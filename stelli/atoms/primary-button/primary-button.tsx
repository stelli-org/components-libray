import React, { ReactNode } from "react";
import styles from "./primary-button.module.css";
import { Minus } from "@stelli/components-library-experiment.icons.minus";
import { Help } from "@stelli/components-library-experiment.icons.help";
import { Alert } from "@stelli/components-library-experiment.icons.alert";
import { Bell } from "@stelli/components-library-experiment.icons.bell";
import { Book } from "@stelli/components-library-experiment.icons.book";
import { Calendar } from "@stelli/components-library-experiment.icons.calendar";
import { Camera } from "@stelli/components-library-experiment.icons.camera";
import { Card } from "@stelli/components-library-experiment.icons.card";
import { Cart } from "@stelli/components-library-experiment.icons.cart";
import { Clock } from "@stelli/components-library-experiment.icons.clock";

export type PrimaryButtonProps = {
  children?: ReactNode;
  iconName:
    | "minus"
    | "help"
    | "alert"
    | "bell"
    | "book"
    | "calendar"
    | "camera"
    | "card"
    | "cart"
    | "clock";
};

const iconsMap = {
  minus: Minus,
  help: Help,
  alert: Alert,
  bell: Bell,
  book: Book,
  calendar: Calendar,
  camera: Camera,
  card: Card,
  cart: Cart,
  clock: Clock,
};

export function PrimaryButton({ children, iconName }: PrimaryButtonProps) {
  const Icon = iconsMap[iconName] || Minus;

  console.log('Icon', Icon);

  return (
    <button className={styles.primaryButton}>
      {children}
      {<Icon />}
    </button>
  );
}
