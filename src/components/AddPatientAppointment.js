import './AddPatientAppointment.scss';

import * as MockAPI from '../mocks/api';

import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import MedicalScanSearch from './MedicalScanSearch';
import MedicalScanTable from './MedicalScanTable';
import { fetchAppointmentList } from '../store/asyncActions';
import moment from 'moment';
import { resetAddPatientAppointment } from '../store/actions';

const AddPatientAppointment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const medicalScanList = useSelector((s) => s.medicalScan.scanList);
  const submitRef = useRef();
  const [patient, setPatient] = useState({
    salutation: 'MR',
    name: '',
    gender: 'Male',
    dob: moment().format('YYYY-MM-DD'),
    age: 0,
    ageType: 'Y',
    date: moment().format('YYYY-MM-DD'),
    phone: '',

    // address
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United State',
  });

  const updateFormInputValue = (e) => {
    const { name, value } = e.target;
    const updateValues = { [name]: value };

    // salutation
    if (name === 'salutation') {
      if (value === 'MR') updateValues.gender = 'Male';
      if (value === 'MS') updateValues.gender = 'Female';
    }

    // gender
    if (name === 'gender') {
      if (value === 'Male') updateValues.salutation = 'MR';
      if (value === 'Female') updateValues.salutation = 'MS';
    }

    setPatient({ ...patient, ...updateValues });
  };

  const saveAppointment = async (e) => {
    e.preventDefault();

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
        <form onSubmit={saveAppointment}>
          <div className="row">
            {/* 1. name */}
            <div>
              <div className="label">Patient name</div>
              <select
                name="salutation"
                className="salutation"
                value={patient.salutation}
                required
                onChange={updateFormInputValue}
              >
                <option value="MR">Mr.</option>
                <option value="MS">Ms.</option>
              </select>
              <input
                className="name"
                name="name"
                value={patient.name}
                required
                onChange={updateFormInputValue}
              />
            </div>

            {/* 2. gender */}
            <div className="gender">
              <div className="label">Gender</div>
              <div className="gender-radio-group" onChange={updateFormInputValue}>
                <input name="gender" type="radio" value="Male" required defaultChecked />
                <label htmlFor="Male">Male</label>
                <input name="gender" type="radio" value="Female" required />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>

          <div className="row">
            {/* 3. DOB */}
            <div>
              <div className="label">BOD</div>
              <input
                className="dob"
                name="dob"
                type="date"
                value={patient.dob}
                required
                onChange={updateFormInputValue}
              />
            </div>

            {/* 4. Age */}
            <div>
              <div className="label">Age</div>
              <input
                className="age"
                name="age"
                type="number"
                value={patient.age}
                required
                onChange={updateFormInputValue}
              />
              <select
                name="ageType"
                value={patient.ageType}
                required
                onChange={updateFormInputValue}
              >
                <option value="Y">Years</option>
              </select>
            </div>
          </div>

          <div className="row">
            {/* 5. Appointment Date */}
            <div>
              <div className="label">Appointment Date</div>
              <input
                className="date"
                name="date"
                type="date"
                value={patient.date}
                required
                onChange={updateFormInputValue}
              />
            </div>

            {/* 6. Phone No */}
            <div>
              <div className="label">Phone No</div>
              <input
                className="phone"
                name="phone"
                type="phone"
                value={patient.phone}
                required
                onChange={updateFormInputValue}
              />
            </div>
          </div>

          {/* 7. Address */}
          <div className="address">
            <div className="label">Address</div>
            <div className="address-input">
              <input
                name="street1"
                className="street"
                type="text"
                value={patient.street1}
                placeholder="Street Address"
                required
                onChange={updateFormInputValue}
              />
              <input
                name="street2"
                className="street"
                type="text"
                value={patient.street2}
                placeholder="Street Address 2"
                onChange={updateFormInputValue}
              />

              <div className="row">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={patient.city}
                  required
                  onChange={updateFormInputValue}
                />
                <input
                  name="state"
                  type="text"
                  placeholder="State/Province"
                  value={patient.state}
                  required
                  onChange={updateFormInputValue}
                />
              </div>

              <div className="row">
                <input
                  name="zipcode"
                  type="text"
                  placeholder="Zip Code"
                  value={patient.zipcode}
                  required
                  onChange={updateFormInputValue}
                />
                <select
                  name="country"
                  placeholder="Select Country"
                  value={patient.country}
                  required
                  onChange={updateFormInputValue}
                >
                  <option value="United State">United State</option>
                </select>
              </div>
            </div>
          </div>

          <input ref={submitRef} style={{ visibility: 'hidden' }} type="submit" />
        </form>
      </div>

      <div className="medical-scan-details">
        <h1>Medical Scan Details</h1>
        <MedicalScanSearch />
        <MedicalScanTable />
      </div>

      <button onClick={() => submitRef.current.click()}>Save</button>
    </div>
  );
};

export default AddPatientAppointment;
