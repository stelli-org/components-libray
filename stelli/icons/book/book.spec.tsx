import React from "react";
import { render } from "@testing-library/react";
import { BasicBook } from "./book.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicBook />);

  expect(getByTestId("book")).toBeVisible();
});
