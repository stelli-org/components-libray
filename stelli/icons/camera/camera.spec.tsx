import React from "react";
import { render } from "@testing-library/react";
import { BasicCamera } from "./camera.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicCamera />);

  expect(getByTestId("camera")).toBeVisible();
});
