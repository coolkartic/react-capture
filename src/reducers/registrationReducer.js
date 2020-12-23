import {
  REQUEST_CREATE_NEW_USER,
  RECEIVE_CREATE_NEW_USER,
  NEW_USER_CREATE_ERROR,
} from "../constants/ActionTypes";

export function registrationReducer(
  state = {
    isFetching: false,
  },
  action
) {
  switch (action.type) {
    case REQUEST_CREATE_NEW_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_CREATE_NEW_USER: {
      return Object.assign({}, state, { isFetching: false }, action.payload);
    }
    case NEW_USER_CREATE_ERROR: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
}
