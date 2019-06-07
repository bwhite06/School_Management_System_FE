import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Button , Input} from 'reactstrap'
import './CreateHW.css'

class CreateHW extends Component {
    constructor(props) {
      super(props);
      this.state={
          title:'',
          allDay:false,
          start: new Date(''),
          end:new Date(''),
          student_id:Number('')

      }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    CreateHW(){

    }

    render() {
      
      return (
        <div className='createhw'>
        <h3>Create Homework Assignment</h3>
        <label>
       
        <Input type ="checkbox" id = 'myCheck' onClick={()=>{
            var checkBox = document.getElementById("myCheck");
            if (checkBox.checked == true){
              this.state.allDay=true
            } else {
               this.state.allDay = false;
            }
        }} className='allDay' name ='allDay'  />{' '}
        <h5>Is This an All Day Assignment or Event?</h5>
        </label>
        
        <Input className = "title" placeholder='title' name= 'title' onChange ={this.handleInputChange} value = {this.state.title}/>
        
        <Input className = "start" placeholder='start' name= 'start' onChange ={this.handleInputChange} value = {this.state.start}/>
        <Input className = "end" placeholder='end' name= 'end' onChange ={this.handleInputChange} value = {this.state.end}/>
        <Input className = "student_id" placeholder='student_id' name= 'student_id' onChange ={this.handleInputChange} value = {this.state.student_id}/>
        <Button onClick={this.CreateHW()}>Submit</Button>
        </div>
      );
    }
  }
  
  export default CreateHW;