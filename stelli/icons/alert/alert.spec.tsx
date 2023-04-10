import React from "react";
import { render } from "@testing-library/react";
import { BasicAlert } from "./alert.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicAlert />);

  expect(getByTestId("alert")).toBeVisible();
});
