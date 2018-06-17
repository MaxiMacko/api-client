import { combineReducers } from 'redux-immutable';

import welcomeScreenReducer from './components/Components/WelcomeScreen/ducks';

const rootReducer = combineReducers({
  welcomeScreenReducer,
});

export default rootReducer;
