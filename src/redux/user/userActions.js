import userActionTypes from "./userType";

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const EmailSigninStart = (EmailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  paylaod: EmailAndPassword,
});

export const SigninSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const SigninFailure = (err) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: err,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (err) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: err,
});

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: userCredentials,
});
export const signUpFailure = (err) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: err,
});
