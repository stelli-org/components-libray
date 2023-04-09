import React, { ReactNode } from 'react';
import styles from './button.module.css'

export type ButtonProps = {
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}
