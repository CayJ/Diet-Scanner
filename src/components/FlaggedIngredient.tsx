import React from "react";
import { Chip } from "@mui/material";

interface FlaggedIngredientProps {
  ingredient: string;
}

const FlaggedIngredient: React.FC<FlaggedIngredientProps> = ({
  ingredient,
}) => {
  return (
    <Chip
      label={ingredient}
      sx={{
        backgroundColor: "#ffcccc", // Light red background
        color: "#cc0000", // Darker red text
        margin: 0.5,
        fontSize: "0.875rem",
        padding: "10px 15px", // Fuller look
        borderRadius: "4px",
      }}
    />
  );
};

export default FlaggedIngredient;
