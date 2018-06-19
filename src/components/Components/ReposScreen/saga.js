import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import storage from '../../../utils';
import { axiosInstance } from '../../../Api/Api';
import { browserHistory } from '../../../index';

import {
  fetchReposRequestAction,
  fetchReposFailureAction,
  fetchReposSuccessAction,
} from './ducks';

function* fetchReposSaga() {
  try {
    const reposUrl = storage.get('reposUrl');
    if (!reposUrl) {
      browserHistory.push('/');
      return;
    }

    const reposResponse = yield call(() => axiosInstance({
      url: `${reposUrl}?per_page=10000000`,
      method: 'get',
    }));

    yield put(fetchReposSuccessAction(reposResponse.data));
  } catch (e) {
    yield put(fetchReposFailureAction());
  }
}

function* rootSaga() {
  yield takeLatest(fetchReposRequestAction, fetchReposSaga);
}

export default rootSaga;