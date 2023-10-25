import { combineReducers } from "redux";
import dietReducer from "./dietReducer";

const rootReducer = combineReducers({
  diet: dietReducer,
});

export default rootReducer;
