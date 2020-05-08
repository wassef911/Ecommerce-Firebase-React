import userActionTypes from "./userType";

const INITIAL_STATE = {
  currentUser: null,
  err: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGN_UP_START:
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
      };
    case userActionTypes.SIGN_UP_SUCCESS:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        err: null,
      };
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        err: payload,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        err: null,
      };

    default:
      return state;
  }
};

export default userReducer;
