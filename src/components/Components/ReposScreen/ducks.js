import {
  createAction,
  handleActions,
} from 'redux-actions';
import { fromJS } from 'immutable';
import moment from 'moment';

const PREFIX = '@REPOS_SCREEN';

export const fetchReposRequestAction = createAction(`${PREFIX}/FETCH_REPOS/REQUEST`);
export const fetchReposSuccessAction = createAction(`${PREFIX}/FETCH_REPOS/SUCCESS`);
export const fetchReposFailureAction = createAction(`${PREFIX}/FETCH_REPOS/FAILURE`);
export const changeHasOpenIssueFilterValueAction = createAction(`${PREFIX}/CHANGE_HAS_OPEN_ISSUES_FILTER`);
export const changeHasTopicsFilterValueAction = createAction(`${PREFIX}/CHANGE_HAS_TOPICS_FILTER`);
export const changeStarsFilterValueAction = createAction(`${PREFIX}/CHANGE_STARS_FILTER`);
export const changeUpdateDateFilterValueAction = createAction(`${PREFIX}/CHANGE_UPDATE_DATE_FILTER`);
export const changeIsForkFilterValueAction = createAction(`${PREFIX}/CHANGE_IS_FORK_FILTER`);
export const changeLanguageFilterValueAction = createAction(`${PREFIX}/CHANGE_LANGUAGE_FILTER`);
const currentDate = moment()
  .subtract(6, 'months')
  .format('x');

const initialState = fromJS({
  data: [],
  loading: false,
  hasOpenIssueFilterValue: 'ALL',
  hasTopicsFilterValue: 'ALL',
  starsFilterValue: 0,
  updateDate: currentDate,
  isForkFilterValue: 'ALL',
  language: 'ALL',
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
  [changeHasOpenIssueFilterValueAction]: (state,  { payload }) =>
    state.set('hasOpenIssueFilterValue', payload),
  [changeHasTopicsFilterValueAction]: (state,  { payload }) =>
    state.set('hasTopicsFilterValue', payload),
  [changeStarsFilterValueAction]: (state, { payload }) =>
    state.set('starsFilterValue', payload),
  [changeUpdateDateFilterValueAction]: (state, { payload }) =>
    state.set('updateDate', payload),
  [changeIsForkFilterValueAction]: (state, { payload }) =>
    state.set('isForkFilterValue', payload),
  [changeLanguageFilterValueAction]: (state, { payload }) =>
    state.set('language', payload),
}, initialState);

export default reducer;
