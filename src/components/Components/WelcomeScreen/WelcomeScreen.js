import React from 'react';
import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';

import githubIcon from '../../../images/github-icon.png';

import './WelcomeScreen.css';
import { fetchUserDataRequestAction } from './ducks';
import { getLoading } from './selectors';
import CustomLoadingIndicator from "../CustomLoadingIndicator/CustomLoadingIndicator";

const propTypes = {
  fetchUserData: PropTypes.func,
  loading: PropTypes.bool,
};

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  inputChangeHanlder = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  renderContent = () => {
    const {
      loading,
      fetchUserData,
    } = this.props;

    if (loading) {
      return <CustomLoadingIndicator />;
    }

    return (
      <div className="welcome-screen-content">
        <div className="logo">
          <img src={githubIcon} alt="icon" height="50" width="50"/>
        </div>
        <div className="input-container">
          <input
            className="user-name-input"
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.inputChangeHanlder(e)}
          />
          <button
            type="submit"
            className="submit-button"
            onClick={() => fetchUserData(this.state.inputValue)}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="welcome-screen-root">
        {this.renderContent()}
      </div>
    );
  }
}

WelcomeScreen.propTypes = propTypes;

function mapStateToProps(state) {
  console.log(state);
  return {
    loading: getLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData(userName) {
      dispatch(fetchUserDataRequestAction(userName));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
