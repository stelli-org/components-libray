import React from "react";
import { render } from "@testing-library/react";
import { BasicCalendar } from "./calendar.composition";

it("should render icon correctly", () => {
  const { getByTestId } = render(<BasicCalendar />);

  expect(getByTestId("calendar")).toBeVisible();
});
