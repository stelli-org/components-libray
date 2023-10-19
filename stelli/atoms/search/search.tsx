import React from "react";
import { Camera as CameraIcon } from "@stelli/components-library-experiment.icons.camera";
import styles from "./search.module.css";

export type SearchProps = {
  value?: string;
};

export function Search({ value }) {
  return (
    <div className={styles.wrapper}>
      <input id="search" type="text" placeholder="Search..." value={value} onChange={() => null} />
      <div className={styles.icon}>
        <CameraIcon />
      </div>
    </div>
  );
}
