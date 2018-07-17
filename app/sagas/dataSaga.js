import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import {UNIQUE_KEY, USER_DB_ID} from "../assets/constants";
import {
  ERROR_OCCURRED,
  FETCH_DATA_SUCCESS,
  IN_PORGRESS,
  SAVE_DATA_SUCCESS,
  FETCHING_DATA,
  SAVING_DATA,
  EDITING_DATA,
} from "../actions/type";

import {getData, saveData, editData} from '../api';
import firebase from "firebase";

const inProgress = () => ({type: IN_PORGRESS});

const saveDataSuccess = () => ({type: SAVE_DATA_SUCCESS});

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const apiError = () => ({type: ERROR_OCCURRED});

function* _fetchData() {
  try {
    const keys = yield AsyncStorage.multiGet([UNIQUE_KEY, USER_DB_ID]);
    const key = keys[0][1];
    const id = keys[1][1];

    if (id) {
      yield put(inProgress());

      const data = yield getData(key, id);
      yield put(fetchDataSuccess(data));
    }
  } catch (e) {
    yield put(apiError());
  }
}

function* _saveData(action) {
  try {
    const key = yield AsyncStorage.getItem(UNIQUE_KEY);
    yield put(inProgress());

    const { data } = action.payload;
    yield call(saveData, data, key);

    AsyncStorage.setItem(USER_DB_ID, data.ref.key.toString());
    yield put(saveDataSuccess());

  } catch (e) {
    yield put(apiError());
  }
}

function* _editData(action) {
  try {
    const key = yield AsyncStorage.getItem(UNIQUE_KEY);
    yield put(inProgress());

    const {data, id} = action.payload;
    // yield editData(data, key, id);
    yield call(editData, data, key, id);
    // yield call([firebase.database().ref(`data/${key}/${id}`), 'update'], data);
    yield put(saveDataSuccess());

  } catch (e) {
    yield put(apiError());
  }
}

export const dataSaga = [
  takeLatest(FETCHING_DATA, _fetchData),
  takeEvery(SAVING_DATA, _saveData),
  takeLatest(EDITING_DATA, _editData),
];