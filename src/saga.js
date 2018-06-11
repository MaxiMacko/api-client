import {
  all,
} from 'redux-saga/effects';
import testSaga from './components/Components/TestComponent/saga';

function* saga() {
  yield all([
    testSaga(),
  ]);
}

export default saga;
