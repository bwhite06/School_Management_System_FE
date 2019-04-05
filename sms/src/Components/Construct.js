import React, { Component } from 'react';
import {Navlink,Link} from 'react-router-dom';
import {Button} from 'reactstrap'

class Construct extends Component {
  
componentWillMount(){

}
render() {
      //countdown 




      return (
        <div>
          <label>SMS - School Management System</label>
          <h1>School Management System is currently under maintenance </h1>
          
          <Button>
              <Link to = '/'>
              Return Home
              </Link>
          </Button>
  
        </div>
      );
    }
}
  export default Construct;
  