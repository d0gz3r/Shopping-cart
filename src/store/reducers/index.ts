import basketReducer from "./basketReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  basket: basketReducer,
})

export type RootState = ReturnType<typeof rootReducer>