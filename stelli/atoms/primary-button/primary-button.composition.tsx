import React from "react";
import { PrimaryButton } from "./primary-button";

export const BasicPrimaryButton = () => {
  // Passing div instead of a real Icon just to avoid creating a dependency for only the composition
  return <PrimaryButton icon={<div>Icon</div>}>hello world!</PrimaryButton>;
};
