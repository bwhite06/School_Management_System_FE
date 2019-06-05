import React, { Component } from 'react';
import { Link,Route, Switch,NavLink} from 'react-router-dom';
import './MainScreen.css';
import axios from 'axios';
import Profile from '../Profile/Profile';
import { Button } from 'reactstrap';
const jwtJsDecode = require('jwt-js-decode')

  

const auth = window.sessionStorage.getItem('authKey');
const user_id = window.sessionStorage.getItem('user_id');


let jwt = jwtJsDecode.jwtDecode(auth);
   





const host = 'http://localHost:5000'

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profile:{
            email: "",
            username:  "",
            school:  "",
            classes:  "",
            address:  ""
        }
        
    }
  }
  componentWillMount(){
    if(jwt != null){
      if(jwt.payload.user_type==='student'){  
    
        axios
        .get(`${host}/studentProfile/${user_id}`)
        .then(response=>{
          console.log(response);
          this.setState({
              profile:{
                email: response.data[0].email,
                username: response.data[0].username,
                school: response.data[0].school,
                classes: response.data[0].classes,
                address: response.data[0].address
              }
           
          })
    
        
        
          console.log(auth);
       
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
              profile:{
                email: response.data[0].email,
                username: response.data[0].username,
                school: response.data[0].school,
                classes: response.data[0].classes,
              }
           
          })
    
        
        
          console.log(auth);
       
        })
        .catch(err=>{
           console.log(err.response)
        })
      } else {
        
      }



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
           <NavLink to ="/construction"> Homework </NavLink>
           <NavLink to ="/construction"> Schedule </NavLink>
           </nav>
    </div>
     
        <h1>Welcome To sms System</h1>
       
        <Profile {...this.props} profile = {this.state} /> 
        {/* notifications */}

      </div>
    );
  }
}

export default MainScreen;