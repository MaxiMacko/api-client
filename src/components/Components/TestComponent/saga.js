import {
  call,
  takeLatest,
} from 'redux-saga/effects';

import Api from '../../../Api/Api';

import {
  testFetchAction,
} from './ducks';

function* testSaga() {
  const response = yield call(Api.getTestData);
  console.log(response);
}

function* rootSaga () {
  yield takeLatest(testFetchAction, testSaga);
}

export default rootSaga;
