import React from "react";
import { render } from "@testing-library/react";
import { BasicCard } from "./card.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicCard />);

  expect(getByTestId("card")).toBeVisible();
});
