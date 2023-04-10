import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicButton, ButtonWithMinusIcon } from "./button.composition";

it("should render with the correct text", () => {
  render(<BasicButton />);

  expect(screen.getByText("hello world!")).toBeVisible();
});

it("should render button with minus icon", () => {
  render(<ButtonWithMinusIcon />);

  expect(
    screen.getByText("Button with minus icon beside the text")
  ).toBeVisible();
  expect(screen.getByTestId("minus")).toBeVisible();
});
