import {
  handleActions,
  createAction,
} from 'redux-actions';
import {
  fromJS,
} from 'immutable';

const PREFIX = '@WELCOME_SCREEN';

export const fetchUserDataRequestAction = createAction(`${PREFIX}/FETCH_USER_DATA/REQUEST`);
export const fetchUserDataFailureAction = createAction(`${PREFIX}/FETCH_USER_DATA/FAILURE`);
export const fetchUserDataSuccessAction = createAction(`${PREFIX}/FETCH_USER_DATA/SUCCESS`);

const initialState = fromJS({
  loading: false,
});

const reducer = handleActions({
  [fetchUserDataRequestAction]: state =>
    state.set('loading', true),
  [fetchUserDataFailureAction]: state =>
    state.set('loading', false),
  [fetchUserDataSuccessAction]: state =>
    state.set('loading', false),
}, initialState);

export default reducer;
