const BillingStatus = ({ appointment }) => {
  const { medicalScanList, paymentList } = appointment;

  const totalAmount = medicalScanList.reduce((sum, scan) => sum + scan.amount, 0);
  const totalDiscount = medicalScanList.reduce((sum, scan) => sum + scan.discount, 0);
  const totalPaidAmount = paymentList.reduce((sum, { paidAmount }) => sum + paidAmount, 0);
  const totoalBalance = totalAmount - totalDiscount - totalPaidAmount;

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
            <td>{totalAmount} INR</td>
          </tr>
          <tr>
            <th>Discount</th>
            <td>{totalDiscount} INR</td>
          </tr>
          <tr>
            <th>Paid Amount</th>
            <td>{totalPaidAmount} INR</td>
          </tr>
          <tr>
            <th>Balance</th>
            <td>{totoalBalance} INR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingStatus;
