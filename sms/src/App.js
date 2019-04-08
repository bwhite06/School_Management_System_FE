import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js';
import Construct from './Components/Construct.js'
import MainScreen from './Components/MainScreen/MainScreen';


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //routes
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainScreen" component={MainScreen} />
        <Route exact path="/construction" component={Construct} />
      </div>
    );
  }
}

export default App;