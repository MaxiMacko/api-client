import {
  handleActions,
  createAction,
} from 'redux-actions';
import { fromJS } from 'immutable';

const PREFIX = '@WELCOME_SCREEN';

export const fetchUserDataRequestAction = createAction(`${PREFIX}/FETCH_USER_DATA/REQUEST`);
export const fetchUserDataFailureAction = createAction(`${PREFIX}/FETCH_USER_DATA/FAILURE`);
export const fetchUserDataSuccessAction = createAction(`${PREFIX}/FETCH_USER_DATA/SUCCESS`);

const initialState = fromJS({
  loading: false,
  error: false,
  userData: {},
});

const reducer = handleActions({
  [fetchUserDataRequestAction]: state =>
    state
      .set('userData', fromJS({}))
      .set('loading', true)
      .set('error', false),
  [fetchUserDataFailureAction]: state =>
    state
      .set('userData', fromJS({}))
      .set('loading', false)
      .set('error', true),
  [fetchUserDataSuccessAction]: (state, { payload }) =>
    state
      .set('userData', fromJS(payload))
      .set('loading', false)
      .set('error', false),
}, initialState);

export default reducer;
