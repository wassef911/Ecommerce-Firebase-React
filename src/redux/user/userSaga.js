import { takeLatest, put, call } from "redux-saga/effects";

import userActionTypes from "./userType";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase";
import { googleSigninSuccess, googleSigninFailure } from "./userActions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(googleSigninFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START);
}
