import React from "react";
import { render } from "@testing-library/react";
import { BasicMinus } from "./minus.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicMinus />);

  expect(getByTestId("minus")).toBeVisible();
});
