import React from "react";
import { Button } from "./button";
import { Minus } from "@stelli/components-library-experiment.icons.minus";

export const BasicButton = () => {
  return <Button>hello world!</Button>;
};

export const ButtonWithMinusIcon = () => {
  return (
    <Button icon={<Minus />}>Button with minus icon beside the text</Button>
  );
};
