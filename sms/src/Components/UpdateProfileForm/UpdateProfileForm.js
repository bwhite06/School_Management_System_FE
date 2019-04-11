import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import './UpdateProfile.css';
import axios from 'axios'

const host = 'http://localHost:5000'
class UpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.state={
       
            name: "",
            classes:  "",
            address:  ""
        
       
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 
  update = () => {

   const info = {
        name: this.state.name,
        classes: this.state.classes,
        address: this.state.address
    
   }
    const user_id = window.sessionStorage.getItem('user_id')
    axios
    .put(`${host}/createStudentProfile/${user_id}`,info).then(response=>{
console.log(response);
this.props.history.push(`/MainScreen`)
    }).catch(err=>{
        console.log(err)
    })

//add in school
}


  render() {
    //routes
    return (
      <div>
          <h3>Update info here</h3>

       <input className = "address" placeholder='address' name= 'address' onChange ={this.handleInputChange} value = {this.state.address}/>
       <input className = "classes" placeholder='classes' name= 'classes' onChange ={this.handleInputChange} value = {this.state.classes}/>
       <input className = "name" placeholder='name' name= 'name' onChange ={this.handleInputChange} value = {this.state.name}/>
       <Button onClick={this.update} >update-info</Button>
      
      </div>
    );
  }
}

export default UpdateProfile;
