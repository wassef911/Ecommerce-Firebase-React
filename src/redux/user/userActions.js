import userActionTypes from "./userType";

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

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
