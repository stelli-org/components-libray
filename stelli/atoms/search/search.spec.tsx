import React from "react";
import { render } from "@testing-library/react";
import { SearchWithValue } from "./search.composition";

it("should render with the correct text", () => {
  const { getByDisplayValue } = render(<SearchWithValue />);
  const rendered = getByDisplayValue("Hello world");
  expect(rendered).toBeTruthy();
});
