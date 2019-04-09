import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Profile.css';


class Profile extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      
      return (
        <div>
        <h1>Student Profile</h1>
        <p>School: {this.props.profile.profile.school}</p>
        <p>Address: {this.props.profile.profile.address}</p>
        <p>Classes: {this.props.profile.profile.classes}</p>
        <p>Email: {this.props.profile.profile.email}</p>
        </div>
      );
    }
  }
  
  export default Profile;
  