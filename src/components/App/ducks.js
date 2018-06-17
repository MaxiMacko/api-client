import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = fromJS({
  testValue: true,
});

const reducer = handleActions({

}, initialState);

export default reducer;
