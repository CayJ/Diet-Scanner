import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddIngredients from "../pages/AddIngredients";
import { Provider } from "react-redux";
import store from "../store";

describe("AddIngredients page", () => {
  it("renders the subtitle with the selected diet", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddIngredients diet="Vegetarian" />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText("Add Ingredients: Vegetarian")).toBeInTheDocument();
  });
});
