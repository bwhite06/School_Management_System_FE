import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Button , Input,FormGroup,Label,FormText,Toast, ToastBody, ToastHeader} from 'reactstrap'
import './CreateHW.css'
import axios from 'axios';
import moment from 'moment'

const host = 'http://localHost:5000'

class CreateHW extends Component {
    constructor(props) {
      super(props);
      this.state={
          title:'',
          allDay:false,
          start: "",
          end:"",
          student_id: ""

      }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    CreateHW = (event) => {
      const format ='LLLL';
      
       event.preventDefault();
       let creds = {
        title:this.state.title,
        allDay:this.state.allDay,
        start:moment(this.state.start).format('LLLL'), 
        end: moment(this.state.end).format('LLLL'),
        student_id:Number(this.state.student_id)

       }

  const URL = `${host}/Create_A_Assignment/${window.sessionStorage.getItem("user_id")}`;
  axios
  .post(`${URL}`,creds)
  .then(response=>{
      
    console.log(response);
    alert("HW Assignment/Event Created");
 
 
  }).catch(err=>{
      console.log(err)
  })
    }
    render() {
      
      return (
        <div className='createHw'>
          <div className='createHwTitle'>
          <h3>Create Homework Assignment For Your Students</h3>
          </div>
        
        

        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
          <p className='Label'>Please Enter Assignment Name:</p>
          </ToastHeader>
          <ToastBody>
          <Input type='textbox' className = "title" placeholder='title' name= 'title' onChange ={this.handleInputChange} value = {this.state.title}/>
          <div className='checkBox'>
       
       <Input type ="checkbox" id = 'myCheck' onClick={()=>{
           var checkBox = document.getElementById("myCheck");
           if (checkBox.checked == true){
             this.setState({
               allDay:true
                 })
           } else {
               this.setState({
                   allDay:false
                     })
           }
       }} className='allDay' name ='allDay'  />{' '}
       <p className ='checkboxHeading'>Is This an All Day Assignment or Event?</p>
       </div>
          </ToastBody>
          
        </Toast>
      </div>

      
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
          <p className='Label'>Please Enter Dates In This Format:    2019-6-12 10:30 pm</p>
          </ToastHeader>
          <ToastBody>
            <Input className = "start" placeholder='start' name= 'start' onChange ={this.handleInputChange} value = {this.state.start}/>
            <Input className = "end" placeholder='end' name= 'end' onChange ={this.handleInputChange} value = {this.state.end}/>
       
          </ToastBody>
        </Toast>
        </div>


        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
          <p className='Label'>Please Enter Student ID:</p>
          </ToastHeader>
          <ToastBody>
          <Input className = "student_id" placeholder='student_id' name= 'student_id' onChange ={this.handleInputChange} value = {Number(this.state.student_id)}/>
       
          </ToastBody>
        </Toast>
        </div>

        
         <FormGroup>
          <Label for="exFile">File</Label>
          <Input type="file" name="file" id="exFile" />
          <FormText color="muted">
            Place Your Assignment Here
          </FormText>
        </FormGroup>
        <Button name= 'submit' onClick={this.CreateHW}>submit</Button>
        
        </div>
        
      );
    }
  }
  
  export default CreateHW;