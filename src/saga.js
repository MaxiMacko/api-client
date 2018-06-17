import { all } from 'redux-saga/effects';

import welcomeScreenSaga from './components/Components/WelcomeScreen/saga';

function* saga() {
  yield all([
    welcomeScreenSaga(),
  ]);
}

export default saga;
