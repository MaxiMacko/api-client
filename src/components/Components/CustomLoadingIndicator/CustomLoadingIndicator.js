import React from 'react';

import './CustomLoadingIndicator.css';

class CustomLoadingIndicator extends React.Component {
  render() {
    return (
      <div className="custom-loading-indicator-root">
        <div className="container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default CustomLoadingIndicator;