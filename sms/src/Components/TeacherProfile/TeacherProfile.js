import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateHW from '../CreateHW/CreateHW'


class TeacherProfile extends Component {
    constructor(props) {
      super(props)
    }


    render() {
      
      return (
        <div>
        <h1>Teacher Profile</h1>
        <p>School: {this.props.profile.profile.school}</p>
        <p>Address: {this.props.profile.profile.address}</p>
        <p>Classes: {this.props.profile.profile.classes}</p>
        <p>Email: {this.props.profile.profile.email}</p>
        
        <CreateHW {...this.props} isAuthed={true} />
        </div>
      );
    }
  }
  
  export default TeacherProfile;