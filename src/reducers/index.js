import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as form } from "redux-form";

// Reducer
import { registrationReducer } from "./registrationReducer";

const appReducer = combineReducers({
  routing: routerReducer,
  form,
  registration: registrationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "UNAUTH_USER") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
