import {
  createSelector,
} from 'reselect';

const loading = state => state.getIn(['welcomeScreenReducer', 'loading']);

export const getLoading = createSelector(
  loading,
  value => value
);
