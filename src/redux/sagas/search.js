import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_MOVIES_BY_NAME,
  GET_MOVIE_ERROR,
  GET_MOVIE_COMPLETE,
  GET_MOVIE_BY_ID_ERROR,
  GET_MOVIE_BY_ID_COMPLETE,
  GET_MOVIE_BY_ID
} from "../actions/types";

import {apiCall} from '../api/index';

export function* getMovies({ payload }) {
  try {
    const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
    yield put({type: GET_MOVIE_COMPLETE, results});
  } catch (error) {
      yield put({type: GET_MOVIE_ERROR, error});
  }
}

export function* getMovieById({payload}){
  try{
    const movie = yield call(apiCall, `&i=${payload.id}`, null, null, 'GET');

    yield put({type: GET_MOVIE_BY_ID_COMPLETE, movie});
  }catch(error){
    yield put({type: GET_MOVIE_BY_ID_ERROR, error})
  }
}

export default function* search() {
  yield takeLatest(GET_MOVIES_BY_NAME, getMovies);
  yield takeLatest(GET_MOVIE_BY_ID, getMovieById);
}
