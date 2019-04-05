import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js';
import Construct from './Components/Construct.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    //routes
    return (
      <div>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/construction" component = {Construct}/>
      </div>
    );
  }
}

export default App;
