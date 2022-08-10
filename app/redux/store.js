/**
 * @Screen : Redux Store
 * @Description :
 *
 * @providesModule ReduxStore
 */

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loader, toast } from "./reducers";
import { reducer as formReducer } from "redux-form";

const store = createStore(
  combineReducers({
    loader,
    toast,
    form: formReducer,
  }),
  undefined,
  compose(applyMiddleware(thunk))
);

export const configureStore = () => {
  return store;
};

export default store;
