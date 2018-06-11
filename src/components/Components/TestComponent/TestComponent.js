import React from 'react';
import {
  connect,
} from 'react-redux';

import {
  testFetchAction,
} from './ducks';

class TestComponent extends React.Component {
  componentDidMount() {
    this.props.initTestRequest();
  }

  render() {
    return (
      <div>Test component</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initTestRequest() {
      dispatch(testFetchAction());
    },
  };
}

export default connect(null, mapDispatchToProps)(TestComponent);
