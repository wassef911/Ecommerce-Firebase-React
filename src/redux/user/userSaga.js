import { takeLatest, put } from "redux-saga/effects";

import { UserActionTypes } from "./user.types";

import { auth, googleProvider } from "../../firebase/firebase";

export function* signInWithGoogle() {}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START);
}
