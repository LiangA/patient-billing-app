import './PatientBilling.scss';

import { Link, useParams } from 'react-router-dom';

import TransactionTable from './TransactionTable';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const PatientBilling = () => {
  const { appointmentId } = useParams();
  const isLoading = useSelector((s) => s.appointment.isLoading);
  const appointment = useSelector((s) => s.appointment.map[appointmentId]);
  const [payableAmount, setPayableAmount] = useState(0);
  const [paymentMode, setPymentMode] = useState('CASH');

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const { medicalScanList, paymentList } = appointment;
  const totalAmount = medicalScanList.reduce((sum, scan) => sum + scan.amount, 0);
  const totalDiscount = medicalScanList.reduce((sum, scan) => sum + scan.discount, 0);
  const totalPaidAmount = paymentList.reduce((sum, { paidAmount }) => sum + paidAmount, 0);
  const totalBalance = totalAmount - totalDiscount - totalPaidAmount;

  return (
    <div className="patient-billing">
      <Link to="/">Back to View Appointment</Link>
      <h1>Patient Billing</h1>

      <div className="content">
        <div className="left">
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
                  <td>{totalBalance} INR</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payable Amount */}
          <div className="payable-amount">
            <span className="label">Payable Amount:</span>
            <input
              type="number"
              value={payableAmount}
              min="0"
              max={totalBalance}
              onChange={(e) => {
                let amount = e.target.value;
                if (amount < 0) amount = 0;
                else if (amount > totalBalance) amount = totalBalance;

                setPayableAmount(amount);
              }}
            />
          </div>

          {/* Payment Mode */}
          <div className="payment-mode">
            <span className="label">Payment Mode:</span>
            <select value={paymentMode} onChange={(e) => setPymentMode(e.target.value)}>
              <option value="CASH">Cash</option>
              <option value="CARD">Card</option>
            </select>
          </div>

          {/* Card Mode */}
          {paymentMode === 'CARD' && (
            <div className="card">
              <input type="text" placeholder="Cardholder's Name" />
              <br />
              <input type="text" placeholder="Card Number" />
              <div className="expire">
                <div>Expire</div>
                <input type="text" placeholder="MM/YYYY" />
                <input type="text" placeholder="CVC" />
                <span>128-bit secured</span>
              </div>
            </div>
          )}

          <button>Save</button>
        </div>

        <div className="right">
          <div className="transaction-history">
            <h3>Previoud Transaction:</h3>
            <TransactionTable paymentList={appointment.paymentList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBilling;
