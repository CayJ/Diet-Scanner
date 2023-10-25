import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NextButton from "../components/NextButton";

describe("NextButton component", () => {
  it("renders the button", () => {
    render(<NextButton onClick={() => {}} disabled={false} />);
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<NextButton onClick={handleClick} disabled={false} />);
    fireEvent.click(screen.getByText("Next"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("is disabled when the disabled prop is true", () => {
    render(<NextButton onClick={() => {}} disabled={true} />);
    expect(screen.getByText("Next")).toBeDisabled();
  });
});
