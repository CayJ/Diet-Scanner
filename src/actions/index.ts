export const selectDiet = (diet: string) => {
  return {
    type: "SELECT_DIET" as const,
    payload: diet,
  };
};

export const addIngredients = (ingredients: string[]) => {
  return {
    type: "ADD_INGREDIENTS" as const,
    payload: ingredients,
  };
};
