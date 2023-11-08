interface DietState {
  ingredients: string[];
  view: "SET_INGREDIENTS" | "CHECK_INGREDIENTS";
}

interface SelectDietAction {
  type: "SELECT_DIET";
  payload: string;
}

interface SetIngredientsAction {
  type: "SET_INGREDIENTS";
  payload: string[];
}

interface ToggleViewAction {
  type: "TOGGLE_VIEW";
  payload: "SET_INGREDIENTS" | "CHECK_INGREDIENTS";
}

type DietActions = SelectDietAction | SetIngredientsAction | ToggleViewAction;

const initialState: DietState = {
  ingredients: [],
  view: "SET_INGREDIENTS",
};

const dietReducer = (state = initialState, action: DietActions): DietState => {
  switch (action.type) {
    case "SET_INGREDIENTS":
      return {
        ...state,
        ingredients: action.payload,
      };
    case "TOGGLE_VIEW":
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

export default dietReducer;
