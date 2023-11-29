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
        backgroundColor: "#ffcccc",
        color: "#cc0000",
        margin: 0.5,
        fontSize: "1.0rem",
        padding: "10px 15px",
        borderRadius: "4px",
      }}
    />
  );
};

export default FlaggedIngredient;
