import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppointmentTable = () => {
  const appointment = useSelector((s) => s.appointment);
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
        {appointment.list.map((ap) => (
          <tr key={ap.id}>
            {/* 1. Appointment ID */}
            <td>{ap.id}</td>

            {/* 2. Patient Name */}
            <td>{ap.patient.name}</td>

            {/* 3. Age-Gender: 27Y-Male */}
            <td>
              {ap.patient.age}
              {ap.patient.ageType}-{ap.patient.gender}
            </td>

            {/* 4. Appointment Date */}
            <td>{ap.date}</td>

            {/* 5. Balance Amount */}
            <td>{ap.totalBalance}</td>

            {/* 6. Action */}
            <td>
              <Link to={'/transaction/' + ap.id}>Click to Pay</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
