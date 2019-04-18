import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios'

const host = 'http://localHost:5000'
class RegistrationTeacher extends Component {
  constructor(props) {
    super(props)
    this.state={
       
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        message: ""
       
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 
 register = () => {

   const info = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,

    
   }
if(this.state.confirmPassword==this.state.password){
    axios
    .post(`${host}/registerTeacher`,info).then(response=>{
        console.log(response);
        window.sessionStorage.setItem("authKey", response.data.token);
    
        
    },this.props.history.push(`/`)
    ).catch(err=>{
        console.log(err)
    });

}


}



    

//add in school



  render() {
    //routes
    return (
      <div>
        <h3>Are you a Teacher?</h3>
          <h3>Join-easy as one two three</h3>
          <p>lets go!!</p>
          <input className = "email" placeholder='email' name= 'email' onChange ={this.handleInputChange} value = {this.state.email}/>
          <input className = "username" placeholder='username' name= 'username' onChange ={this.handleInputChange} value = {this.state.username}/>
          <input className = "password" placeholder='password' name= 'password' onChange ={this.handleInputChange} value = {this.state.password}/>
          <input className = "confirmPassword" placeholder='confirmPassword' name= 'confirmPassword' onChange ={this.handleInputChange} value = {this.state.confirmPassword}/>
          <Button className ='info' onClick={this.register} >update-info</Button>
      <p >{this.state.message}</p>
      </div>
    );
  }
}

export default RegistrationTeacher;
