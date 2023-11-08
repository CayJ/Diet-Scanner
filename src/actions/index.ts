export const selectDiet = (diet: string) => {
  return {
    type: "SELECT_DIET" as const,
    payload: diet,
  };
};

export const setIngredients = (ingredients: string[]) => {
  return {
    type: "SET_INGREDIENTS" as const,
    payload: ingredients,
  };
};

export const toggleView = (view: "SET_INGREDIENTS" | "CHECK_INGREDIENTS") => {
  return {
    type: "TOGGLE_VIEW" as const,
    payload: view,
  };
};
