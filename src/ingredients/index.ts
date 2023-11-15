import plantBased from "./PlantBased";
import vegetarian from "./Vegetarian";
import celiac from "./Celiac";

interface Ingredients {
  [key: string]: string[];
}

const flaggedIngredients: Ingredients = {
  "Plant-based": plantBased,
  Vegetarian: vegetarian,
  Celiac: celiac,
};

export default flaggedIngredients;
