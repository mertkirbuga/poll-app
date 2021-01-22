import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Questions from './containers/Questions/Questions';
import QuestionDetails from './containers/QuestionDetails/QuestionDetails';
import NewQuestion from "./containers/NewQuestion/NewQuestion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/newQuestion" component={NewQuestion} />
          <Route path="/details" component={QuestionDetails} />
          <Route path="/" exact component={Questions} />
        </Switch>
      </div>
    );
  }
}

export default App;
