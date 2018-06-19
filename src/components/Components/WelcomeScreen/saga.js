import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import { browserHistory } from '../../../index';
import { axiosInstance } from '../../../Api/Api';
import storage from '../../../utils';

import {
  fetchUserDataFailureAction,
  fetchUserDataRequestAction,
  fetchUserDataSuccessAction,
} from './ducks';

function* fetchUserDataSaga(action) {
  try {
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

    storage.set('reposUrl', repos_url);

    yield put(fetchUserDataSuccessAction());
    browserHistory.push('/repos');
  } catch (e) {
    yield put(fetchUserDataFailureAction());
  }

}

function* saga() {
  yield takeLatest(fetchUserDataRequestAction, fetchUserDataSaga);
}

export default saga;
