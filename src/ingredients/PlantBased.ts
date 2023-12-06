import { Ingredient } from "./Ingredient";
import { IngredientCategory } from "./Categories";
import { vegetarianIngredients } from "./Vegetarian";

export const plantBasedIngredients: Ingredient[] = [
  ...vegetarianIngredients,
  { name: "Dairy", category: IngredientCategory.DefinitelyAvoid },
  { name: "Whey", category: IngredientCategory.DefinitelyAvoid },
  { name: "Honey", category: IngredientCategory.DefinitelyAvoid },
  { name: "Egg", category: IngredientCategory.DefinitelyAvoid },
  { name: "Milk", category: IngredientCategory.PotentiallyAvoid },
  { name: "Cheese", category: IngredientCategory.PotentiallyAvoid },
];
