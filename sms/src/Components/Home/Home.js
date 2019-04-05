import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Home.css';
import { Button } from 'reactstrap';
class Home extends Component {
  render() {
    //routes
    return (
      <div>
        <label>SMS - School Management System</label>
        <nav>
          <NavLink>Home</NavLink>
          <NavLink to="/construction">Register</NavLink>
          <NavLink to="/construction">More-Info</NavLink>
          <Button>Sign-In</Button>
        </nav>

      </div>
    );
  }
}

export default Home;
