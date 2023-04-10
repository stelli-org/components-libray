import React from "react";
import { render } from "@testing-library/react";
import { BasicBell } from "./bell.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicBell />);

  expect(getByTestId("bell")).toBeVisible();
});
