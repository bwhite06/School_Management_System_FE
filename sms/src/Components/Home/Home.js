import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Home.css';
import { Button } from 'reactstrap';
import axios from 'axios';


const host = 'http://localHost:5000'

class Home extends Component {

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




  const URL = `${host}/login`;
  axios
  .post(`${URL}`,creds)
  .then(response=>{
    console.log(response);
    window.sessionStorage.setItem("authKey", response.data.token);
    const auth = window.sessionStorage.getItem('authKey');
    console.log(auth);
 
  },this.props.history.push(`/MainScreen`))
  .catch(err=>{
     console.log(err.response)
  })
}


render() {
    //routes
    return (
      <div>
        <nav> 
        <label>SMS - School Management System</label>
        <NavLink>Home</NavLink>
        <NavLink to="/construction">Register</NavLink>
        <NavLink to="/construction">More-Info</NavLink>
        <input className = "username" placeholder='username' name= 'username' onChange ={this.handleInputChange} value = {this.state.username}/>
        <input className = "password" placeholder='password' name= 'password' onChange ={this.handleInputChange} value = {this.state.password}/>
      
        <Button onClick={this.login}>Sign-In</Button>
        </nav>
        <h1>Welcome to the Student Management System</h1>
        <img src ={require('./images/activity-boys-children-1153976.jpg')}  />
        
      </div>
    );
  }
}

export default Home;