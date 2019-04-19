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

if(creds.username===""||creds.password===""){
  
  alert("please enter password");
  this.props.history.push(`/`);


}else{
  const URL = `${host}/login`;
  axios
  .post(`${URL}`,creds)
  .then(response=>{
    console.log(response);
    window.sessionStorage.setItem("authKey", response.data.token);
    window.sessionStorage.setItem('user_id',response.data.user_id);
    const user_id = window.sessionStorage.getItem('user_id');
    const auth = window.sessionStorage.setItem('authKey');
    console.log(auth,user_id);
 
  },this.props.history.push(`/MainScreen`))
  .catch(err=>{
     console.log(err.response)
  })
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
        <input className = "password" placeholder='password' name= 'password' onChange ={this.handleInputChange} value = {this.state.password}/>
      
        <Button onClick={this.login}>Sign-In</Button>
        </nav>
        </div>
        
        <h1 className='Title'>Welcome to the School Management System</h1>
        <img src ={require('./images/activity-boys-children-1153976.jpg')}  />
        <h1>get your own account</h1>

        <h1>Schedule your classes with easy</h1>
        <p>
          This System connects student and teacher 
        </p>
        <img src ={require('./images/backpacks-college-college-students-1454360.jpg')}  />
        <p>teacher login</p>
      </div>
    );
  }
}

export default Home;
