import React from "react";
import { render } from "@testing-library/react";
import { BasicClock } from "./clock.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicClock />);

  expect(getByTestId("clock")).toBeVisible();
});
