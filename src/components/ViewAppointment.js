import './ViewAppointment.scss';

import AppointmentTable from './AppointmentTable';
import { Link } from 'react-router-dom';

const ViewAppointment = () => {
  return (
    <div className="view-appointment">
      <h1>View Appointment</h1>
      <Link to="/add">add patient billing</Link>
      <div className="search-bar">appointment search bar</div>
      <AppointmentTable />
    </div>
  );
};

export default ViewAppointment;
