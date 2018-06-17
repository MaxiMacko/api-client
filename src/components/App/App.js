import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import WelcomeScreen from '../Components/WelcomeScreen/WelcomeScreen';
import ReposScreen from '../Components/ReposScreen/ReposScreen';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/repos" component={ReposScreen} />
        <Route path="/" component={WelcomeScreen} />
      </Switch>
    );
  }
}

export default App;
