import React, { Component } from 'react';
import { Route, Switch,NavLink} from 'react-router-dom';
import './MainScreen.css';
import axios from 'axios';
import Profile from '../Profile/Profile'
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
    const auth = window.sessionStorage.getItem('authKey');
    const user_id = window.sessionStorage.getItem('user_id')
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
  }
  render() {
    //routes
    return (
      <div>
          <nav className = "nav" >
          <p>{this.state.profile.username}</p>
          <NavLink to ="/UpdateProfile"> Update Profile </NavLink>
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