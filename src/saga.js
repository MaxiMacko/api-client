import { all } from 'redux-saga/effects';

import welcomeScreenSaga from './components/Components/WelcomeScreen/saga';
import reposScreenSaga from './components/Components/ReposScreen/saga';

function* saga() {
  yield all([
    reposScreenSaga(),
    welcomeScreenSaga(),
  ]);
}

export default saga;
