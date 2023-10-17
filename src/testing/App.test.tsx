import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders starting screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Select Diet/i);
  expect(linkElement).toBeInTheDocument();
});
