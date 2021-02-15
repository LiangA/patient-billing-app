import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppointmentTable = () => {
  const appointment = useSelector((s) => s.appointment);
  console.log(appointment);

  if (appointment.isLoading) {
    return <div>Loading...</div>;
  }

  if (appointment.list.length === 0) {
    return <div>No Appointment</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Patient Name</th>
          <th>Age-Gender</th>
          <th>Appointment Date</th>
          <th>Balance Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {appointment.list.map((ap) => {
          return (
            <tr key={ap.id}>
              <td>{ap.id}</td>
              <td>{ap.patient.name}</td>
              <td>
                {ap.patient.age}-{ap.patient.gender}
              </td>
              <td>{ap.date}</td>
              <td>0</td>
              <td>
                <Link to={'/transaction/' + ap.id}>Click to Pay</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
