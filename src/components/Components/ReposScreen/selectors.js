import { createSelector } from 'reselect';

const reposScreenData = state => state.getIn(['reposScreenReducer', 'data']);

export const getReposScreenData = createSelector(
  reposScreenData,
  data => data.toJS()
);
