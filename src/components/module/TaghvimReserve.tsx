import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "moment/locale/fa";


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = (props) => (
  <div className="h-[400px] lg:w-[700px] overflow-y-auto w-[300px] border-2 bg-blue-600 text-white text-xl p-2 border-blue-600 rounded-md mt-6">
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      culture="fa"
      
    />
  </div>
)


export default MyCalendar