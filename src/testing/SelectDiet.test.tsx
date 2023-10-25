import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SelectDiet } from "../pages/SelectDiet";

describe("SelectDiet page", () => {
  it("renders the title, subtitle, and buttons", () => {
    render(
      <MemoryRouter>
        <SelectDiet />
      </MemoryRouter>,
    );
    expect(screen.getByText("Diet Scanner")).toBeInTheDocument();
    expect(screen.getByText("Select Diet")).toBeInTheDocument();
    expect(screen.getByText("Plant-based")).toBeInTheDocument();
    expect(screen.getByText("Vegetarian")).toBeInTheDocument();
    expect(screen.getByText("Celiac")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});
