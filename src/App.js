import React, { Component } from 'react';
import './App.css';
import Questions from './containers/Questions/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Questions />
      </div>
    );
  }
}

export default App;
