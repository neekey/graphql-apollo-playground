import React, { Component } from 'react';
import logo from './logo.svg';
import NodeList from './components/comp.NodeList';
import Note from './components/comp.Note';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Route path="/home" component={NodeList}/>
          <Route path="/notes/:id" component={Note}/>
        </p>
      </div>
    );
  }
}

export default App;
