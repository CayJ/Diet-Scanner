import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface DietarySelectionsProps {
  onSelect: (dietaryOption: string) => void;
  selectedDiets: string[];
}

const DietarySelections: React.FC<DietarySelectionsProps> = ({
  onSelect,
  selectedDiets,
}) => {
  const diets = ["Plant-based", "Vegetarian", "Celiac"];

  return (
    <List
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {diets.map((diet) => (
        <ListItem key={diet} sx={{ justifyContent: "center", width: "100%" }}>
          <Button
            variant="contained"
            onClick={() => onSelect(diet)}
            sx={{
              backgroundColor: selectedDiets.includes(diet)
                ? "#4CAF50"
                : "primary",
              ":hover": {
                backgroundColor: selectedDiets.includes(diet) ? "#388E3C" : "",
              },
              width: "auto",
            }}
          >
            {diet}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default DietarySelections;
