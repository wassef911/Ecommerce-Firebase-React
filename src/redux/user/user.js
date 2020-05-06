import userActionTypes from "./userType";

const INITIAL_STATE = {
  currentUser: null,
  err: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
      };
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        err: null,
      };
    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        err: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
