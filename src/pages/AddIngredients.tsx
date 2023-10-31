import React, { useState } from "react";
import { Box } from "@mui/material";
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import IngredientsInput from "../components/IngredientsInput";

interface AddIngredientsProps {
  diet: string;
}

const AddIngredients: React.FC<AddIngredientsProps> = ({ diet }) => {
  const [ingredients, setIngredients] = useState<string>("");

  const handleIngredientsChange = (value: string) => {
    setIngredients(value);
  };

  const handleNextClick = () => {
    // next button clicked
  };

  return (
    <PageContainer>
      <Title title="Diet Scanner" subtitle={`Add Ingredients: ${diet}`} />
      <IngredientsInput
        value={ingredients}
        onChange={handleIngredientsChange}
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <BackButton to="/" />
        <Box ml={4}>
          <NextButton
            onClick={handleNextClick}
            disabled={!ingredients.trim()}
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default AddIngredients;
