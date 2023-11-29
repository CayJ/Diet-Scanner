import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { green } from "@mui/material/colors";

interface DietarySelectionsProps {
  onSelect: (dietaryOption: string) => void;
  selectedDiet: string;
}

const DietarySelections: React.FC<DietarySelectionsProps> = ({
  onSelect,
  selectedDiet,
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
              backgroundColor: selectedDiet === diet ? green[500] : "primary",
              ":hover": {
                backgroundColor: selectedDiet === diet ? green[700] : "",
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
