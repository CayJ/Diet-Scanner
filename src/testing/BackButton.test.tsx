import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BackButton from "../components/BackButton";

describe("BackButton component", () => {
  it("renders the button", () => {
    render(
      <MemoryRouter>
        <BackButton to="/" />
      </MemoryRouter>,
    );
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("navigates to the select page when clicked", () => {
    render(
      <MemoryRouter initialEntries={["/initial"]}>
        <Routes>
          <Route path="/initial" element={<BackButton to="/test" />} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText("Back"));
    expect(screen.getByText("Test Page")).toBeInTheDocument();
  });
});
