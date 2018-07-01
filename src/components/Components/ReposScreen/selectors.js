import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import moment from 'moment';

import { dataStub } from '../../../dataStub';

// const reposScreenData = state => state.getIn(['reposScreenReducer', 'data']);
const reposScreenData = () => fromJS(dataStub);
const loading = state => state.getIn(['reposScreenReducer', 'loading']);
const hasOpenIssuesFilterValue = state => state.getIn(['reposScreenReducer', 'hasOpenIssueFilterValue']);
const hasTopicsFilterValue = state => state.getIn(['reposScreenReducer', 'hasTopicsFilterValue']);
const starsFilterValue = state => state.getIn(['reposScreenReducer', 'starsFilterValue']);
const updateDate = state => state.getIn(['reposScreenReducer', 'updateDate']);
const isForkFilterValue = state => state.getIn(['reposScreenReducer', 'isForkFilterValue']);
const currentLanguage = state => state.getIn(['reposScreenReducer', 'language']);

export const getCurrentLanguage = createSelector(
  currentLanguage,
  language => language
);

export const getAvailableLanguages = createSelector(
  reposScreenData,
  data => {
    return data
      .filter(item => item.get('language'))
      .map(item => item.get('language'))
      .toSet()
      .map(item => ({
        label: item,
        value: item,
      }))
      .toJS();
  }
);

export const getIsForkFilterValue = createSelector(
  isForkFilterValue,
  value => value
);

export const getUpdateDate = createSelector(
  updateDate,
  date => date
);

export const getHasTopicsFilterValue = createSelector(
  hasTopicsFilterValue,
  value => value
);

export const getHasOpenIssuesFilterValue = createSelector(
  hasOpenIssuesFilterValue,
  value => value
);

export const getLoadingValue = createSelector(
  loading,
  value => value
);

export const getStarsFilterValue = createSelector(
  starsFilterValue,
  value => value
);

export const getReposScreenData = createSelector(
  reposScreenData,
  getHasOpenIssuesFilterValue,
  getHasTopicsFilterValue,
  getStarsFilterValue,
  getUpdateDate,
  getIsForkFilterValue,
  getCurrentLanguage,
  (
    data,
    hasOpenIssuesFilter,
    hasTopicsFilter,
    starsFilter,
    updateDateValue,
    forkFilterValue,
    currentLanguageValue,
  ) => {
    let result = data.toJS();
    if (!hasOpenIssuesFilter === 'ALL' && hasTopicsFilter === 'ALL' && !starsFilter) {
      result = hasOpenIssuesFilter === 'YES' ?
        result.filter(item => item.open_issues_count > 0) :
        result.filter(item => item.open_issues_count === 0);

      result = hasTopicsFilter === 'YES' ?
        result.filter(item => item.topics.length > 0) :
        result.filter(item => item.topics.length === 0);
    }

    result = result.filter(item =>
      Number(item.stargazers_count) >= starsFilter
    );

    result = result.filter(item =>
      Number(moment(`${item.updated_at}`).format('x')) > Number(updateDateValue)
    );

    if (forkFilterValue === 'SOURCES') {
      result = result.filter(item => !item.fork);
    } else if (forkFilterValue === 'FORKS') {
      result = result.filter(item => item.fork);
    }

    if (currentLanguageValue !== 'ALL') {
      result = result.filter(item => item.language === currentLanguageValue);
    }
    return result;
  }
);
