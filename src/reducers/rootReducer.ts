import { combineReducers } from "redux";
import flatsReducer from "./flatsReducer";

const rootReducer = combineReducers({
  flats: flatsReducer
});

export type AppState = ReturnType<typeof Object>;

export default rootReducer;
