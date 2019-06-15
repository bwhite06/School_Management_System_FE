import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import CreateHW from '../CreateHW/CreateHW'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './TeacherProfile.css'

class TeacherProfile extends Component {
    constructor(props) {
      super(props)
    }


    render() {
      
      return (
        <div>
        <Card>
        <CardHeader tag="h3">Teacher Profile</CardHeader>
        <CardBody>
        <CardText>School: {this.props.profile.profile.school}</CardText>
        <CardText>Address: {this.props.profile.profile.address}</CardText>
        <CardText>Classes: {this.props.profile.profile.classes}</CardText>
          <CardText>Email: {this.props.profile.profile.email}</CardText>
          <Button tag={Link} to="/somewhere" to='/UpdateProfile' className='customBtn'>Update</Button>
        </CardBody>
        
      </Card>
        
        <CreateHW {...this.props} isAuthed={true} />
        </div>
      );
    }
  }
  
  export default TeacherProfile;