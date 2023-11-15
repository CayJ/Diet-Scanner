import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../actions";
import { RootState } from "../reducers";
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import flaggedIngredients from "../ingredients";
import { Box } from "@mui/material";
import FlaggedIngredient from "./FlaggedIngredient";

const isFuzzyMatch = (input: string, target: string): boolean => {
  return input.toLowerCase().includes(target.toLowerCase());
};

interface CheckIngredientsProps {
  diet: string;
}

const CheckIngredients: React.FC<CheckIngredientsProps> = ({ diet }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state: RootState) => state.diet);

  const flagged = ingredients.filter((ingredient) =>
    flaggedIngredients[diet].some((flag) => isFuzzyMatch(ingredient, flag)),
  );

  return (
    <PageContainer>
      <Title
        title="Diet Scanner"
        subtitle={`Flagged Ingredients for: ${diet}`}
      />
      <Box sx={{ my: 2 }}>
        {flagged.length > 0 ? (
          flagged.map((ingredient, index) => (
            <FlaggedIngredient key={index} ingredient={ingredient} />
          ))
        ) : (
          <p>No flagged ingredients found.</p>
        )}
      </Box>
      <BackButton onClick={() => dispatch(toggleView("SET_INGREDIENTS"))} />
    </PageContainer>
  );
};

export default CheckIngredients;
