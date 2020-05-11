import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase";

import userActionTypes from "./userType";
import {
  SigninSuccess,
  SigninFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./userActions";

export function* getUserSnapshot(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, {
      additionalData,
    });
    const userSnapshot = yield userRef.get();
    yield put(SigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(SigninFailure(err));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}
export function* signInWithEmail({ paylaod: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (err) {
    console.log(err.message);
    yield put(SigninFailure(err.message));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    put(signOutFailure());
  }
}
export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield getUserSnapshot(user);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}
export function* signUpLogin({ payload: { user, additionalData } }) {
  yield getUserSnapshot(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}
export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signUpLogin);
}

export default function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
  ]);
}
