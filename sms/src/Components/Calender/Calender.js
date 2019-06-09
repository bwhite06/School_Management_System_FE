import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from 'reactstrap';
import './Calender.css'
import "./react-big-calendar.css";



let a = Date.now()
const localizer = BigCalendar.momentLocalizer(moment);
const allViews = Object
  .keys(BigCalendar.Views)
  .map(k => BigCalendar.Views[k])

class Calendar extends React.Component {
    constructor(props){
        super(props);
       this.state={
           hwTitlte:""
       }
            

    }
   
    
    
    render() {
    if(this.props.hw){
     
         
        return (
            <div>
                <Button className='updateBtn' onClick={this.update}>Update Calender</Button>
                <div style={{ height: 700 }}>
    <BigCalendar
    localizer = {localizer}
      events={this.props.hw}
      step={60}
      defaultView="month"
      views={allViews}
      defaultDate={new Date(a)}
      onSelectEvent={event => alert(event.title)}
      startAccessor='start'
      endAccessor='end'
      selectable={true}
    />
  </div>
            </div>

);
    
   } else{
       return <div></div>
   }

    
     
}
}
export default Calendar;