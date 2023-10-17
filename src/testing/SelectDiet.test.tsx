import React from "react";
import { render, screen } from "@testing-library/react";
import { SelectDiet } from "../components/SelectDiet";

test("renders Select Diet screen", () => {
  render(<SelectDiet />);
  const linkElement = screen.getByText(/Diet Scanner/i);
  expect(linkElement).toBeInTheDocument();
});
