import { combineReducers } from "redux";
import tutorialReducer from "./tutorial/reducer";

export default combineReducers({
  tutorial: tutorialReducer
});
