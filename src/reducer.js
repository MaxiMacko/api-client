import {
  combineReducers,
} from 'redux';

import testReducer from './components/App/ducks';

const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;