import './ViewAppointment.scss';

import AppointmentSearch from './AppointmentSearch';
import AppointmentTable from './AppointmentTable';
import { Link } from 'react-router-dom';

const ViewAppointment = () => {
  return (
    <div className="view-appointment">
      <h1>View Appointment</h1>
      <Link to="/add">New Appointment</Link>
      <AppointmentSearch />
      <AppointmentTable />
    </div>
  );
};

export default ViewAppointment;
