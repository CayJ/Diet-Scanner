import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DietarySelections from "../components/DietarySelections";

test("renders three dietary buttons and handles clicks", () => {
  const mockOnSelect = jest.fn();
  render(<DietarySelections onSelect={mockOnSelect} selectedDiets={[]} />);

  const pbButton = screen.getByText("Plant-based");
  const vegetarianButton = screen.getByText("Vegetarian");
  const celiacButton = screen.getByText("Celiac");

  expect(pbButton).toBeInTheDocument();
  expect(vegetarianButton).toBeInTheDocument();
  expect(celiacButton).toBeInTheDocument();

  fireEvent.click(pbButton);
  expect(mockOnSelect).toHaveBeenCalledWith("Plant-based");

  fireEvent.click(vegetarianButton);
  expect(mockOnSelect).toHaveBeenCalledWith("Vegetarian");

  fireEvent.click(celiacButton);
  expect(mockOnSelect).toHaveBeenCalledWith("Celiac");
});
