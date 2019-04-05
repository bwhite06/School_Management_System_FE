import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Home.css';
import { Button } from 'reactstrap';
class Home extends Component {
  render() {
    //routes
    return (
      <div>
        <nav> 
        <label>SMS - School Management System</label>
        <NavLink>Home</NavLink>
        <NavLink to="/construction">Register</NavLink>
        <NavLink to="/construction">More-Info</NavLink>
        <Button>Sign-In</Button>
        </nav>
        <h1>Welcome to the Student Management System</h1>
        <img src ={require('./images/activity-boys-children-1153976.jpg')}  />
        
      </div>
    );
  }
}

export default Home;
