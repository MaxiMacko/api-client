import {
  createAction,
  handleActions,
} from 'redux-actions';
import { fromJS } from 'immutable';

const PREFIX = '@REPOS_SCREEN';

export const fetchReposRequestAction = createAction(`${PREFIX}/FETCH_REPOS/REQUEST`);
export const fetchReposSuccessAction = createAction(`${PREFIX}/FETCH_REPOS/SUCCESS`);
export const fetchReposFailureAction = createAction(`${PREFIX}/FETCH_REPOS/FAILURE`);

const initialState = fromJS({
  data: [],
  loading: false,
});

const reducer = handleActions({
  [fetchReposRequestAction]: state =>
    state
      .set('data', fromJS([]))
      .set('loading', true),
  [fetchReposSuccessAction]: (state, { payload }) =>
    state
      .set('data', fromJS(payload))
      .set('loading', false),
  [fetchReposFailureAction]: state =>
    state.set('loading', false),
}, initialState);

export default reducer;
