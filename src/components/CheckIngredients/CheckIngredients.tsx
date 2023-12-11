import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../actions";
import { RootState } from "../../reducers";
import PageContainer from "../PageContainer";
import Title from "../Title";
import BackButton from "../BackButton";
import flaggedIngredients from "../../ingredients";
import { Box } from "@mui/material";
import { IngredientCategory } from "../../ingredients/Categories";
import FlaggedCategory from "./FlaggedCategory";
import { Ingredient } from "../../ingredients/Ingredient";

const isFuzzyMatch = (input: string, target: string): boolean => {
  return input.toLowerCase() === target.toLowerCase();
};

interface CheckIngredientsProps {
  diets: string[];
}

const CheckIngredients: React.FC<CheckIngredientsProps> = ({ diets }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state: RootState) => state.diet);

  function getFlaggedIngredients(ingredients: string[]): Ingredient[] {
    let flaggedSet = new Set<Ingredient>();

    diets.forEach((diet) => {
      if (flaggedIngredients[diet]) {
        flaggedIngredients[diet].forEach((ingredient) => {
          if (ingredients.some((flag) => isFuzzyMatch(ingredient.name, flag))) {
            flaggedSet.add(ingredient);
          }
        });
      }
    });

    return Array.from(flaggedSet);
  }

  const flagged = getFlaggedIngredients(ingredients);

  return (
    <PageContainer>
      <Title
        title="Diet Scanner"
        subtitle={`Flagged Ingredients for: ${diets.join(", ")}`}
        blurb="Here is a list of the ingredients we found that may not adhere to your diet.
        Be mindful that this list is not complete, as we have not accounted for every possible
        ingredient combination."
      />
      <Box
        sx={{
          width: "90%",
          maxHeight: "300px",
          overflowY: "auto",
          textAlign: "center",
        }}
      >
        {flagged.length > 0 ? (
          Object.values(IngredientCategory).map((category) => {
            const categorizedIngredients = flagged.filter(
              (flag) => flag.category === category,
            );

            if (categorizedIngredients.length > 0) {
              return (
                <FlaggedCategory
                  key={category}
                  ingredientCategory={category}
                  ingredients={categorizedIngredients}
                />
              );
            }
            return null;
          })
        ) : (
          <h4>No flagged ingredients found.</h4>
        )}
      </Box>
      <BackButton onClick={() => dispatch(toggleView("SET_INGREDIENTS"))} />
    </PageContainer>
  );
};

export default CheckIngredients;
