import {
  createSelector,
} from 'reselect';

const loading = state => state.getIn(['welcomeScreenReducer', 'loading']);
const error = state => state.getIn(['welcomeScreenReducer', 'error']);

export const getErrorValue = createSelector(
  error,
  value => value
);

export const getLoading = createSelector(
  loading,
  value => value
);
