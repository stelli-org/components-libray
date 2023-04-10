import React from "react";
import { render } from "@testing-library/react";
import { BasicHelp } from "./help.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicHelp />);

  expect(getByTestId("help")).toBeVisible();
});
