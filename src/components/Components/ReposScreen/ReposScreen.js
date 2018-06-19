import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RepoCard from '../RepoCard/RepoCard';

import { getReposScreenData } from './selectors';
import './ReposScreen.css';
import { fetchReposRequestAction } from './ducks';

const propTypes = {
  data: PropTypes.instanceOf(Object),
  fetchData: PropTypes.func,
};

class ReposScreen extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <div className="repos-screen-root">
        {
          data.map(item => (
            <RepoCard
              cardData={item}
              key={item.id}
            />
          ))
        }
      </div>
    );
  }
}

ReposScreen.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    data: getReposScreenData(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
      dispatch(fetchReposRequestAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposScreen);
