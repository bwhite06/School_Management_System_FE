import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';





let a = Date.now()
const localizer = BigCalendar.momentLocalizer(moment);
const allViews = Object
  .keys(BigCalendar.Views)
  .map(k => BigCalendar.Views[k])

class Calendar extends React.Component {
    constructor(props){
        super(props);

    }
    
    
    render() {
        let events = [{
            'title': 'All Day Event very long title',
            'allDay': true,
            'start': new Date(2019, 5, 6, 10),
            'end': new Date(2019, 5, 5)
        
        },]
        return (
            <div>
                <div style={{ height: 700 }}>
    <BigCalendar
    localizer = {localizer}
      events={events}
      step={60}
      views={allViews}
      defaultDate={new Date(a)}
    />
  </div>
            </div>
);
    }
}
export default Calendar;