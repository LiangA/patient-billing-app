const BillingStatus = ({ appointment }) => {
  return (
    <div className="billing-status">
      <h3>Current Billing Status:</h3>
      <table>
        <tbody>
          <tr>
            <th>Appointment ID</th>
            <td>{appointment.id}</td>
          </tr>
          <tr>
            <th>Patient Name</th>
            <td>{appointment.patient.name}</td>
          </tr>
          <tr>
            <th>Age/Gender</th>
            <td>
              {appointment.patient.age}/{appointment.patient.gender}
            </td>
          </tr>
          <tr>
            <th>Total Amount</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Discount</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Paid Amount</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Balance</th>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingStatus;
