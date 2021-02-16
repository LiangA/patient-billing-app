import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppointmentTable = () => {
  const appointment = useSelector((s) => s.appointment);
  const { fromDate, toDate, status } = useSelector((s) => s.appointmentSearch);

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
        {appointment.list
          .filter((ap) => {
            if (fromDate !== '' && fromDate > ap.date) return false;
            if (toDate !== '' && ap.date > toDate) return false;
            if (status === 'FULLY_BILLED') return ap.totalBalance === 0;
            if (status === 'NOT_YET_BILLED') return ap.paymentList.length === 0;
            if (status === 'DUE_BILLED') {
              return ap.paymentList.length !== 0 && ap.totalBalance !== 0;
            }
            return true;
          })
          .map((ap) => (
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
                {ap.totalBalance === 0 ? (
                  <div>Done</div>
                ) : (
                  <Link to={'/transaction/' + ap.id}>Click to Pay</Link>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
