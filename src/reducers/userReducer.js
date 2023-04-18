import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        //add user to existing state
        ...state,
        user: action.user,
      };
    default:
      //if state doesnt change return prev state. its imutable
      return state;
  }
};

export default userReducer;
