import { createStore } from "redux";
import roorReducer from './reducers';
import { setLocalStorage } from "../utils/localStorage";

const store = createStore(roorReducer);

store.subscribe(() => {
  setLocalStorage('store', store.getState().basketReducer);
});

export default store;