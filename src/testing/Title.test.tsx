import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../components/Title";

describe("Title component", () => {
  it("renders the title and subtitle", () => {
    render(<Title title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });
});
