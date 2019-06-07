import React, { Component } from 'react';
import { Link,Route, Switch,NavLink} from 'react-router-dom';
import './MainScreen.css';
import axios from 'axios';
import StudentProfile from '../Profile/Profile';
import { Button } from 'reactstrap';
import Calendar from '../Calender/Calender';
import TeacherProfile from '../TeacherProfile/TeacherProfile'

window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
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
    this.state = {
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
          <nav className = "nav" >
          <p>{this.state.profile.username}</p>
          <Button outline color="primary" className ='updateButton btncustom' tag={Link} to="/UpdateProfile" >Update Profile </Button>{}
           </nav>
      <div className='left'>
      <nav className = 'sidenav'>
           <NavLink to ="/Schedule"> Homework </NavLink>
           <NavLink to ="/construction"> Schedule </NavLink>
           </nav>
    </div>
     
        <h1>Welcome To sms System</h1>
       {this.state.isHidden && <TeacherProfile {...this.props} profile = {this.state} /> }
    {!this.state.isHidden && <StudentProfile {...this.props} profile = {this.state} /> }
        {/* notifications */}
  <Calendar  hw ={this.state.hw} isAuthed={true} />

      </div>
    );
  }
};

export default MainScreen;