import { combineReducers } from 'redux-immutable';

import welcomeScreenReducer from './components/Components/WelcomeScreen/ducks';
import reposScreenReducer from './components/Components/ReposScreen/ducks';

const rootReducer = combineReducers({
  welcomeScreenReducer,
  reposScreenReducer,
});

export default rootReducer;
