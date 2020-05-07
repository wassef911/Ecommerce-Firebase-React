import userActionTypes from "./userType";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const googleSigninSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});
export const googleSigninFailure = (err) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: err,
});

export const EmailSigninStart = (EmailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  paylaod: EmailAndPassword,
});
export const EmailSigninSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});
export const EmailSigninFailure = (err) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: err,
});
