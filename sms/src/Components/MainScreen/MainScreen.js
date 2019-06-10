import React, { Component } from 'react';
import { Link,Route, Switch} from 'react-router-dom';
import './MainScreen.css';
import axios from 'axios';
import StudentProfile from '../Profile/Profile';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Button} from 'reactstrap';
import Calendar from '../Calender/Calender';
import TeacherProfile from '../TeacherProfile/TeacherProfile'
import { Jumbotron, Container } from 'reactstrap';





window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
      let jwt= false;
  }
}

const jwtJsDecode = require('jwt-js-decode');
const user_id = window.sessionStorage.getItem('user_id');
let jwt =null;







//while(jwt !== null){
  
//}

   





const host = 'http://localHost:5000'

class MainScreen extends Component {
  constructor(props) {

    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen:false,
      isHidden: false,
      hw:'',
        hwsch:{
          title: '',
          allDay: false,
          start: '',
          end: ''
        },
        profile:{
            email: "",
            username:  "",
            school:  "",
            classes:  "",
            address:  ""
        }
        
    }
  }
  
    
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
     
    
    

  componentDidMount(){
  
      
    
    
        let j =true;
      
      const auth = window.sessionStorage.getItem('authKey');
     if(j){
      let jwt = jwtJsDecode.jwtDecode(auth);
      
      if(jwt.payload.user_type==='student'){  
    
        axios
        .get(`${host}/studentProfile/${user_id}`)
        .then(response=>{
          console.log(response);
          this.setState({
            isHidden:false,
              profile:{
                email: response.data[0].email,
                username: response.data[0].username,
                school: response.data[0].school,
                classes: response.data[0].classes,
                address: response.data[0].address
              }
           
          })
    
        
        
        //  console.log(auth);
       
        })
        .catch(err=>{
           console.log(err.response)
        })
      }if (jwt.payload.user_type==='teacher') {
        axios
        .get(`${host}/teacherProfile/${user_id}`)
        .then(response=>{
          console.log(response);
          this.setState({
            isHidden:true,
              profile:{
                email: response.data[0].email,
                username: response.data[0].username,
                school: response.data[0].school,
                classes: response.data[0].classes,
              }
           
          })
    
        
        
         // console.log(auth);
       
        })
        .catch(err=>{
           console.log(err.response)
        })
      } 

      axios
      .get(`${host}/TeacherViewHomeWork/${user_id}`)
      .then(response=>{
        console.log(response);
        this.setState({
          hw: response.data
          
         
        })
  
      
      
      
     
      })
      .catch(err=>{
         console.log(err.response)
      })
    

    }
    }
    
    
    
  render() {
    //routes
    return (
      <div>
        <Navbar className='custm' color="light" light expand="md">
          <NavbarBrand href="/">SMS: {this.state.profile.username}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Button className='smsLogout' onClick={
              ()=>{
                window.location.reload();
                this.props.history.push(`/MainScreen`);

                return window.sessionStorage.clear();
                
              }
            }>Logout</Button>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/MainScreen">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#table">Calendar</NavLink>
              </NavItem>
            
            </Nav>
          
        </Navbar>
          
      
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome To sms System</h1>
          
        </Container>
      </Jumbotron>
        <h1></h1>
       {this.state.isHidden && <TeacherProfile {...this.props} profile = {this.state} /> }
    {!this.state.isHidden && <StudentProfile {...this.props} profile = {this.state} /> }
        {/* notifications */}
  <Calendar  hw ={this.state.hw} isAuthed={true} />

      </div>
    );
  }
};

export default MainScreen;