import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SelectDiet } from "./pages/SelectDiet";
import AddIngredients from "./pages/AddIngredients";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectDiet />} />
      <Route
        path="/plant-based"
        element={<AddIngredients diets={["Plant-based"]} />}
      />
      <Route
        path="/vegetarian"
        element={<AddIngredients diets={["Vegetarian"]} />}
      />
      <Route path="/celiac" element={<AddIngredients diets={["Celiac"]} />} />
      <Route
        path="/plant-based/vegetarian"
        element={<AddIngredients diets={["Plant-based", "Vegetarian"]} />}
      />
      <Route
        path="/celiac/plant-based"
        element={<AddIngredients diets={["Celiac", "Plant-based"]} />}
      />
      <Route
        path="/celiac/vegetarian"
        element={<AddIngredients diets={["Celiac", "Vegetarian"]} />}
      />

      <Route
        path="/celiac/plant-based/vegetarian"
        element={
          <AddIngredients diets={["Celiac", "Plant-based", "Vegetarian"]} />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
