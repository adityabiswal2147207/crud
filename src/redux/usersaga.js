import * as types from "./actionTypes";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadUsersSuccess,
  loadUsersError,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
} from "./actions";
import { loadUsersApi, createUserApi, deleteUserApi } from "./api";

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

export function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      //yield delay(500);
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.response.data));
  }
}

export function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      //yield delay(500);
      yield put(deleteUsersSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUsersError(error.response.data));
  }
}

export function* onDeleteUsers() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USERS_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUserStartAsync);
}

const userSaga = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUsers)];

export default function* rootSaga() {
  yield all([...userSaga]);
}
