interface DietState {
  selection: string;
  ingredients: string[];
}

interface SelectDietAction {
  type: "SELECT_DIET";
  payload: string;
}

interface AddIngredientsAction {
  type: "ADD_INGREDIENTS";
  payload: string[];
}

type DietActions = SelectDietAction | AddIngredientsAction;

const initialState: DietState = {
  selection: "",
  ingredients: [],
};

const dietReducer = (state = initialState, action: DietActions): DietState => {
  switch (action.type) {
    case "SELECT_DIET":
      return {
        ...state,
        selection: action.payload,
      };
    case "ADD_INGREDIENTS":
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
};

export default dietReducer;
