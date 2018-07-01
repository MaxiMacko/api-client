import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import RepoCard from '../RepoCard/RepoCard';

import {
  getHasTopicsFilterValue,
  getHasOpenIssuesFilterValue,
  getLoadingValue,
  getReposScreenData,
  getStarsFilterValue,
  getUpdateDate,
  getIsForkFilterValue,
  getAvailableLanguages,
  getCurrentLanguage,
} from './selectors';
import {
  fetchReposRequestAction,
  changeHasOpenIssueFilterValueAction,
  changeHasTopicsFilterValueAction,
  changeStarsFilterValueAction,
  changeUpdateDateFilterValueAction,
  changeIsForkFilterValueAction,
  changeLanguageFilterValueAction,
} from './ducks';
import './ReposScreen.css';

const propTypes = {
  data: PropTypes.instanceOf(Object),
  fetchData: PropTypes.func,
  changeHasOpenIssuesFilterValue: PropTypes.func,
  hasOpenIssuesFilterValue: PropTypes.string,
  hasTopicsFilterValue: PropTypes.string,
  changeStarsFilterValue: PropTypes.func,
  changeHasTopicsFilterValue: PropTypes.func,
};

class ReposScreen extends React.Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  changeHasOpenIssueFilterHandler = (e) => {
    this.props.changeHasOpenIssuesFilterValue(e.target.value);
  }

  changeHasTopicsFilterHandler = (e) => {
    this.props.changeHasTopicsFilterValue(e.target.value);
  }

  changeStarsFilterHandler = (e) => {
    this.props.changeStarsFilterValue(e.target.value);
  }

  changeUpdatedAfterFilterHandler = (e) => {
    this.props.changeUpdateDateFilter(e.format('x'));
  }

  changeIsForkFilterHandler = (e) => {
    this.props.changeIsForkFilterValue(e.target.value);
  }

  changeLanguageFilter = (e) => {
    this.props.changeLanguageFilter(e.target.value);
  }

  render() {
    const {
      data,
      hasOpenIssuesFilterValue,
      hasTopicsFilterValue,
      starsFilterValue,
      updateDate,
      isForkFilterValue,
      availableLanguages,
      currentLanguage,
    } = this.props;

    return (
      <div className="repos-screen-root">
        <div className="filter-panel">
          <div className="label">Filters:</div>
          <div className="filter-section">
            <div className="label">
              Has open issues
            </div>
            <div className="filter">
              <select
                onChange={this.changeHasOpenIssueFilterHandler}
                value={hasOpenIssuesFilterValue}
              >
                <option value="ALL">All</option>
                <option value="YES">Yes</option>
                <option value="NO">No</option>
              </select>
            </div>
          </div>
          <div className="filter-section">
            <div className="label">
              Has topics
            </div>
            <div className="filter">
              <select
                onChange={this.changeHasTopicsFilterHandler}
                value={hasTopicsFilterValue}
              >
                <option value="ALL">All</option>
                <option value="YES">Yes</option>
                <option value="NO">No</option>
              </select>
            </div>
          </div>
          <div className="filter-section">
            <div className="label">
              Starred more than:
            </div>
            <div className="filter">
              <input
                value={starsFilterValue}
                type="range"
                id="starsRange"
                min="0"
                max="5000"
                onChange={this.changeStarsFilterHandler}
              />
              <div>
                <input
                  value={starsFilterValue}
                  type="number"
                  onChange={this.changeStarsFilterHandler}
                />
              </div>
            </div>
          </div>
          <div className="filter-section">
            <div className="label">
              Updated after
            </div>
            <div className="filter">
              <DatePicker
                onChange={this.changeUpdatedAfterFilterHandler}
                selected={moment(updateDate, 'x')}
              />
            </div>
          </div>
          <div className="filter-section">
            <div className="label">
              Forks or Sources
            </div>
            <div className="filter">
              <select
                onChange={this.changeIsForkFilterHandler}
                value={isForkFilterValue}
              >
                <option value="ALL">All</option>
                <option value="FORKS">Forks</option>
                <option value="SOURCES">Sources</option>
              </select>
            </div>
          </div>
          <div className="filter-section">
            <div className="label">
              Language
            </div>
            <div className="filter">
              <select
                onChange={this.changeLanguageFilter}
                value={currentLanguage}
              >
                <option
                  value="ALL"
                >
                  All
                </option>
                {
                  availableLanguages.map((item, index) => (
                    <option
                      value={item.value}
                      key={`${item.value}__${index}`}
                    >
                      {item.label}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div className="cards-panel">
          {
            data.map(item => (
              <RepoCard
                cardData={item}
                key={item.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

ReposScreen.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    currentLanguage: getCurrentLanguage(state),
    availableLanguages: getAvailableLanguages(state),
    isForkFilterValue: getIsForkFilterValue(state),
    updateDate: getUpdateDate(state),
    hasTopicsFilterValue: getHasTopicsFilterValue(state),
    hasOpenIssuesFilterValue: getHasOpenIssuesFilterValue(state),
    loading: getLoadingValue(state),
    data: getReposScreenData(state),
    starsFilterValue: getStarsFilterValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguageFilter(data) {
      dispatch(changeLanguageFilterValueAction(data));
    },
    changeIsForkFilterValue(data) {
      dispatch(changeIsForkFilterValueAction(data));
    },
    changeUpdateDateFilter(data) {
      dispatch(changeUpdateDateFilterValueAction(data));
    },
    changeStarsFilterValue(data) {
      dispatch(changeStarsFilterValueAction(data));
    },
    changeHasTopicsFilterValue(data) {
      dispatch(changeHasTopicsFilterValueAction(data));
    },
    changeHasOpenIssuesFilterValue(data) {
      dispatch(changeHasOpenIssueFilterValueAction(data));
    },
    fetchData() {
      dispatch(fetchReposRequestAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposScreen);
