// AddIngredients.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIngredients, toggleView } from "../actions";
import { RootState } from "../reducers";
import { Box } from "@mui/material";
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import IngredientsInput from "../components/IngredientsInput";
import CheckIngredients from "../components/CheckIngredients";

interface AddIngredientsProps {
  diet: string;
}

const AddIngredients: React.FC<AddIngredientsProps> = ({ diet }) => {
  const dispatch = useDispatch();
  const { ingredients, view } = useSelector((state: RootState) => state.diet);
  const [inputValue, setInputValue] = useState(ingredients.join(", "));

  const handleIngredientsChange = (value: string) => {
    setInputValue(value);
  };
  const handleBackClick = () => {
    updateIngredientsState();
  };
  const handleNextClick = () => {
    updateIngredientsState();
    dispatch(toggleView("CHECK_INGREDIENTS"));
  };

  const updateIngredientsState = () => {
    dispatch(
      setIngredients(
        inputValue.split(",").map((ingredient) => ingredient.trim()),
      ),
    );
  };

  if (view === "CHECK_INGREDIENTS") {
    // Render the CheckIngredients view if needed
    return <CheckIngredients diet={diet} />;
  }

  // Otherwise, show the ingredient input interface
  return (
    <PageContainer>
      <Title title="Diet Scanner" subtitle={`Add Ingredients: ${diet}`} />
      <IngredientsInput value={inputValue} onChange={handleIngredientsChange} />
      <Box mt={2} display="flex" justifyContent="space-between">
        <BackButton to="/" onClick={handleBackClick} />
        <Box ml={4}>
          <NextButton
            onClick={handleNextClick}
            disabled={inputValue.length === 0}
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default AddIngredients;
