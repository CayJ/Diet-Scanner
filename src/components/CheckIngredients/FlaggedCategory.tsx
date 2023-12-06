import React from "react";
import { Box, Chip } from "@mui/material";
import { Ingredient } from "../../ingredients/Ingredient";
import { IngredientCategory } from "../../ingredients/Categories";
import FlaggedIngredient from "./FlaggedIngredient";

interface FlaggedCategoryProps {
  ingredientCategory: IngredientCategory;
  ingredients: Ingredient[];
}

const FlaggedCategory: React.FC<FlaggedCategoryProps> = ({
  ingredientCategory,
  ingredients,
}) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <h4>{ingredientCategory}:</h4>
      {ingredients.length > 0 &&
        ingredients.map((ingredient, index) => (
          <FlaggedIngredient key={index} ingredient={ingredient} />
        ))}
    </Box>
  );
};

export default FlaggedCategory;
