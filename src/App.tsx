import React from "react";
import { Routes, Route } from "react-router-dom";
import { SelectDiet } from "./pages/SelectDiet";
import AddIngredients from "./pages/AddIngredients";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectDiet />} />
      <Route
        path="/plant-based"
        element={<AddIngredients diet="Plant-based" />}
      />
      <Route
        path="/vegetarian"
        element={<AddIngredients diet="Vegetarian" />}
      />
      <Route path="/celiac" element={<AddIngredients diet="Celiac" />} />
    </Routes>
  );
};

export default App;
