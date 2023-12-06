import React from "react";
import { Chip } from "@mui/material";
import { Ingredient } from "../../ingredients/Ingredient";
import { IngredientCategory } from "../../ingredients/Categories";

interface FlaggedIngredientProps {
  ingredient: Ingredient;
}

const FlaggedIngredient: React.FC<FlaggedIngredientProps> = ({
  ingredient,
}) => {
  let style;

  switch (ingredient.category) {
    case IngredientCategory.DefinitelyAvoid:
      style = {
        backgroundColor: "#ffcccc",
        color: "#cc0000",
      };
      break;
    case IngredientCategory.PotentiallyAvoid:
      style = {
        backgroundColor: "#fff4cc",
        color: "#cc9a00",
      };
      break;
    default:
      style = {
        backgroundColor: "#cccccc",
        color: "#333333",
      };
      break;
  }

  return (
    <Chip
      label={ingredient.name}
      sx={{
        ...style,
        margin: 0.5,
        fontSize: "1.0rem",
        padding: "10px 15px",
        borderRadius: "4px",
      }}
    />
  );
};

export default FlaggedIngredient;
