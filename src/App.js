import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Questions from './containers/Questions/Questions';
import QuestionDetails from './containers/QuestionDetails/QuestionDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/details" component={QuestionDetails} />
          <Route path="/" exact component={Questions} />
        </Switch>
      </div>
    );
  }
}

export default App;
