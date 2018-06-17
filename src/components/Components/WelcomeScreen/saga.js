import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import {
  browserHistory,
} from '../../../index';
import {
  axiosInstance,
} from '../../../Api/Api';

import { fetchUserDataRequestAction } from './ducks';

function* fetchUserDataSaga(action) {
  const {
    payload: userName,
  } = action;

  const response = yield call(() => axiosInstance({
    url: `https://api.github.com/users/${userName}`,
    method: 'get',
  }));

  const {
    repos_url,
  } = response.data;

  const reposResponse = yield call(() => axiosInstance({
    url: repos_url,
    method: 'get',
  }));

  browserHistory.push('/repos');
}

function* saga() {
  yield takeLatest(fetchUserDataRequestAction, fetchUserDataSaga);
}

export default saga;
