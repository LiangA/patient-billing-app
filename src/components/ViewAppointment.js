import { Link } from 'react-router-dom';

const ViewAppointment = () => {
  return (
    <div className="view-appointment">
      <h1>View Appointment</h1>

      <Link to="/add">add patient billing</Link>
      <div className="search-bar">appointment search bar</div>
      <div className="list">
        appointment list
        <br />
        <Link to="/transaction">Click to Pay</Link>
      </div>
    </div>
  );
};

export default ViewAppointment;
