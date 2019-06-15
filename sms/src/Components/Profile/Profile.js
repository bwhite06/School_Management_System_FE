import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import './Profile.css';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

class StudentProfile extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      
      return (
        <Card>
        <CardHeader tag="h3">Student Profile</CardHeader>
        <CardBody>
        <CardText>School: {this.props.profile.profile.school}</CardText>
        <CardText>Address: {this.props.profile.profile.address}</CardText>
        <CardText>Classes: {this.props.profile.profile.classes}</CardText>
          <CardText>Email: {this.props.profile.profile.email}</CardText>
          <Button tag={Link} to = "/UpdateProfile" className='customBtn'>Update</Button>
        </CardBody>
        
      </Card>
      );
    }
  }
  
  export default StudentProfile;
  