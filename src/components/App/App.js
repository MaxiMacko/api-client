import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import TestComponent from '../Components/TestComponent/TestComponent';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={TestComponent} />
      </Switch>
    );
  }
}

export default App;
