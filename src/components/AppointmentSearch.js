import { setAppointmentSearchCriteria } from '../store/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AppointmentSearch = () => {
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [status, setStatus] = useState('NOT_YET_BILLED');

  return (
    <div className="appointment-search">
      <div>
        <div className="label">From Date</div>
        <input type="date" onChange={(e) => setFromDate(e.target.value)} />
      </div>

      <div>
        <div className="label">To Date</div>
        <input type="date" onChange={(e) => setToDate(e.target.value)} />
      </div>

      <div>
        <div className="label">Status</div>
        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="NOT_YET_BILLED">Not yet Billed</option>
          <option value="DUE_BILLED">Due Billed</option>
          <option value="FULLY_BILLED">Fully Billed</option>
        </select>
      </div>

      <div>
        <div className="label">Common Search</div>
        <input type="text" />
      </div>

      <button
        className="search-button"
        onClick={() => dispatch(setAppointmentSearchCriteria(fromDate, toDate, status))}
      >
        Search
      </button>
    </div>
  );
};

export default AppointmentSearch;
