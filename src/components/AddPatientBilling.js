import './AddPatientBilling.scss';

import { Link } from 'react-router-dom';
import MedicalScanTable from './MedicalScanTable';
import MedicalScanSearch from './MedicalScanSearch';

const AddPatientBilling = () => {
  return (
    <div className="add-patient-billing">
      <div className="patient-details">
        <h1>Patient Details</h1>
      </div>

      <div className="medical-scan-details">
        <h1>Medical Scan Details</h1>
        <MedicalScanSearch />
        <MedicalScanTable />
      </div>

      <Link to="/">Save</Link>
      <br />
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default AddPatientBilling;
