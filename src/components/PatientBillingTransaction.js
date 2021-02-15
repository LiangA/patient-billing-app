import './PatientBillingTransaction.scss';

import { Link, useParams } from 'react-router-dom';

import BillingStatus from './BillingStatus';
import TransactionTable from './TransactionTable';
import { useSelector } from 'react-redux';

const PatientBillingTransaction = () => {
  const { appointmentId } = useParams();
  const isLoading = useSelector((s) => s.appointment.isLoading);
  const appointment = useSelector((s) => s.appointment.map[appointmentId]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="patient-billing-transaction">
      <Link to="/">Back to View Appointment</Link>
      <h1>Patient Billing</h1>

      <div className="content">
        <div className="left">
          <BillingStatus appointment={appointment} />
          <div>Payable Amount</div>
          <div>Payment Mode</div>

          <div className="card">Card</div>

          <button>Save</button>
        </div>

        <div className="right">
          <div className="transaction-history">
            <h3>Previoud Transaction</h3>
            <TransactionTable paymentList={appointment.paymentList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBillingTransaction;
