import { plantBasedIngredients } from "./PlantBased";
import { vegetarianIngredients } from "./Vegetarian";
import { celiacIngredients } from "./Celiac";
import { Ingredient } from "./Ingredient";

interface Ingredients {
  [key: string]: Ingredient[];
}

const flaggedIngredients: Ingredients = {
  "Plant-based": plantBasedIngredients,
  Vegetarian: vegetarianIngredients,
  Celiac: celiacIngredients,
};

export default flaggedIngredients;
