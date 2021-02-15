import { Link } from 'react-router-dom';
import PatientBillingSearchBar from './PatientBillingSearchBar';

const AddPatientBilling = () => {
  return (
    <div className="add-patient-billing">
      <div className="patient-details">
        <h1>Patient Details</h1>
      </div>

      <div className="medical-scan-details">
        <h1>Medical Scan Details</h1>
        <PatientBillingSearchBar />
        <div className="list">Medical list</div>
      </div>

      <Link to="/">Save</Link>
      <br />
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default AddPatientBilling;
