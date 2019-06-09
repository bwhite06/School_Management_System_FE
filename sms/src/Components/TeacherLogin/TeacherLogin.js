import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';
import "./TeacherLogin.css"
const host = 'http://localHost:5000';

class TeacherLogin extends Component {


 
constructor(){
    super();
    this.state = {
      
       username:'',
       password:''
      
    }
  }
  
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  componentDidMount(){
  
  }
  login = (event) =>  {
   event.preventDefault();
    const creds = {
      username: this.state.username,
      password:this.state.password,
      
    }
  
  if(creds.username==="" && creds.password===""){
    
    alert("please enter password");
    this.props.history.push(`/`);
  
  
  }else{
    const URL = `${host}/TeacherLogin`;
    axios
    .post(`${URL}`,creds)
    .then(response=>{
      console.log(response);
      window.sessionStorage.setItem("authKey", response.data.token);
      window.sessionStorage.setItem('user_id',response.data.user_id);
      const user_id = window.sessionStorage.getItem('user_id');
      const auth = window.sessionStorage.getItem('authKey');
      console.log(auth,user_id);
      this.pushit()
    },this.props.history.push(`/MainScreen`))
    .catch(err=>{
      if(err){
        console.log(err)
        this.props.history.push(`/`);
        
      }
      
       console.log(err.response)
    })
  }
  
  
    
  }
  pushit(){
    window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
          this.props.history.push(`/MainScreen`);
      }
    }
  }
  
  render() {
      //routes
      return (
        <div className="outer">
          <div className='outsideNav'>
          <nav> 
          <label>SMS - School Management System</label>
          <NavLink>Home</NavLink>
          {//
          }
          <div class="dropdown">
          <button class="dropbtn">Register</button>
          <div class="dropdown-content">
          <NavLink to="/Registration">Register as a Student</NavLink>
          <NavLink to="/RegistrationTeacher">Register as a Teacher</NavLink>
        
    </div>
  </div>
          
         
          <input className = "username" placeholder='username' name= 'username' onChange ={this.handleInputChange} value = {this.state.username}/>
          <input type='password' className = "password" placeholder='password' name= 'password' onChange ={this.handleInputChange} value = {this.state.password}/>
        
          <Button outline color="primary" className ='updateButton' onClick={this.login}>Sign-In</Button>
          </nav>
          <h3>Are you a teacher?</h3>
          
           
          </div>
        <div className='TeacherLogin'>hello world</div>
        </div>
      );
    }
}
export default TeacherLogin