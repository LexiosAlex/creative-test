import { put, takeEvery, call, select } from "redux-saga/effects";
import axios from "axios";

import { GET_FLATS_PENDING } from "../utils/interfaces/actions/flats";
import { getFlatsDone, getFlatsFail } from "../actions/flats";

function* onGetFlatsRequested() {
  try {
    const response = yield axios({
      method: "get",
      url: "/api/flats"
    });

    yield put(getFlatsDone(response.data.list));
  } catch (error) {
    console.error(error);
    yield put(getFlatsFail(error));
  }
}

export default function*() {
  yield takeEvery(GET_FLATS_PENDING, onGetFlatsRequested);
}
