import { combineReducers } from "redux";
import dietReducer from "./dietReducer";

const rootReducer = combineReducers({
  diet: dietReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
