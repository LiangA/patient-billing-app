import { Link } from 'react-router-dom';

const PatientBillingTransaction = () => {
  return (
    <div className="patient-billing-transaction">
      <Link to="/">Back to View Appointment</Link>
      <h1>Patient Billing</h1>

      <div className="content">
        <div className="left">
          <div className="billing-status">
            <h3>Current Billing Status</h3>
          </div>

          <div>Payable Amount</div>
          <div>Payment Mode</div>

          <div className="card">Card</div>

          <button>Save</button>
        </div>

        <div className="right">
          <div className="transaction-history">
            <h3>Previoud Transaction</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBillingTransaction;
