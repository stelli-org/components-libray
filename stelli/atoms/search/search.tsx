import React from "react";
import { Alert as AlertIcon, IconColor } from "@stelli/components-library-experiment.icons.alert";
import styles from "./search.module.css";

export type SearchProps = {
  value?: string;
};

export function Search({ value }: SearchProps) {
  return (
    <div className={styles.wrapper}>
      <input id="search" type="text" placeholder="Search..." value={value} onChange={() => null} />
        <AlertIcon color={IconColor.Secondary} />
    </div>
  );
}
