import React from "react";
import { render } from "@testing-library/react";
import { BasicCart } from "./cart.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicCart />);

  expect(getByTestId("cart")).toBeVisible();
});
