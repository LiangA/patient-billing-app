import './AddPatientAppointment.scss';

import * as MockAPI from '../mocks/api';

import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MedicalScanSearch from './MedicalScanSearch';
import MedicalScanTable from './MedicalScanTable';
import { fetchAppointmentList } from '../store/asyncActions';
import { resetAddPatientAppointment } from '../store/actions';

const AddPatientAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const patient = useSelector((s) => s.patient);
  const medicalScanList = useSelector((s) => s.medicalScan.scanList);

  const saveAppointment = async () => {
    // TODO: check the patient fields shoud not be empty

    if (medicalScanList.length === 0) {
      alert('At least one medical billing should be selected in the list.');
      return;
    }

    await MockAPI.postAppointment(patient, medicalScanList);
    history.push('/');
    dispatch(resetAddPatientAppointment());
    await fetchAppointmentList(dispatch);
  };

  return (
    <div className="add-patient-appointment">
      <Link to="/">Back to View Appointment</Link>
      <div className="patient-details">
        <h1>Patient Details</h1>
      </div>

      <div className="medical-scan-details">
        <h1>Medical Scan Details</h1>
        <MedicalScanSearch />
        <MedicalScanTable />
      </div>

      <button onClick={saveAppointment}>Save</button>
    </div>
  );
};

export default AddPatientAppointment;
