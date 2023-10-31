import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import IngredientsInput from "../components/IngredientsInput";

describe("IngredientsInput", () => {
  test("renders input field with the correct value", () => {
    const mockOnChange = jest.fn();
    render(<IngredientsInput value="Tomato" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText(
      "Ingredients",
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("Tomato");
  });

  test("calls onChange when input value changes", () => {
    const mockOnChange = jest.fn();
    render(<IngredientsInput value="" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText("Ingredients");
    fireEvent.change(inputElement, { target: { value: "Carrot" } });
    expect(mockOnChange).toHaveBeenCalledWith("Carrot");
  });
});
