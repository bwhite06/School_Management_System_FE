import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js';
import Construct from './Components/Construct.js'
import MainScreen from './Components/MainScreen/MainScreen';
import UpdateProfileForm from './Components/UpdateProfileForm/UpdateProfileForm.js'
import RegistrationPage from './Components/RegistrationPage/RegistrationPage.js'
import RegistrationTeacher from './Components/RegisterTeacher/RegistrationTeacher.js'
import Calendar from './Components/Calender/Calender.js'
import TeacherLogin from './Components/TeacherLogin/TeacherLogin'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //routes
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainScreen" component={MainScreen} />
        <Route exact path ="/TeacherLogin" component ={TeacherLogin}/>
        <Route exact path="/construction" component={Construct} />
        <Route exact path ='/UpdateProfile' component ={UpdateProfileForm}/>
        <Route exact path ='/Registration' component ={RegistrationPage}/>
        <Route exact path="/RegistrationTeacher"component ={RegistrationTeacher}/>
      </div>
    );
  }
}

export default App;
