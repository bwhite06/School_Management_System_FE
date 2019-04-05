import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Home.css';
import { Button } from 'reactstrap';
class Home extends Component {
  render() {
    //routes
    return (
      <div>
        <div> 
        <label>SMS - School Management System</label>
        <Button>Sign-In</Button>
        </div>
        
        <nav>
          <NavLink>Home</NavLink>
          <NavLink to="/construction">Register</NavLink>
          <NavLink to="/construction">More-Info</NavLink>
          
        </nav>
        
      </div>
    );
  }
}

export default Home;
