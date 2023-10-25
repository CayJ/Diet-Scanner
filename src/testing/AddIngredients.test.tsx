import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddIngredients from "../pages/AddIngredients";

describe("AddIngredients page", () => {
  it("renders the subtitle with the selected diet", () => {
    render(
      <MemoryRouter>
        <AddIngredients diet="Vegetarian" />
      </MemoryRouter>,
    );
    expect(screen.getByText("Add Ingredients: Vegetarian")).toBeInTheDocument();
  });
});
