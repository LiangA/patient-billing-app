import {
  selectMedicalScan,
  setMedicalScanDiscount,
  pushMedicalScan,
} from '../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';

const MedicalScanSearch = () => {
  const dispatch = useDispatch();
  const medicalScan = useSelector((s) => s.medicalScan);

  return (
    <div className="medical-scan-details-search-bar">
      <div>
        <span className="label">Scan List</span>
        <Select
          className="select"
          isLoading={medicalScan.options.isLoading}
          isSearchable={true}
          components={{ DropdownIndicator: null }}
          options={medicalScan.options.list.map((mb) => ({
            label: mb.name,
            value: mb.name,
          }))}
          onChange={({ value }) => dispatch(selectMedicalScan(value))}
        />
      </div>

      <div>
        <span className="label">Scan Amount</span>
        <span>{medicalScan.select.amount || 0}</span>
      </div>

      <div className="discount">
        <span className="label">Discount</span>
        <input
          type="number"
          disabled={medicalScan.options.isLoading}
          min="0"
          max={medicalScan.select.maxDiscount || 0}
          value={medicalScan.discount || 0}
          onChange={(e) => {
            const discount = Number.parseInt(e.target.value, 10);
            dispatch(setMedicalScanDiscount(discount));
          }}
        />
      </div>

      <button
        className="add-button"
        disabled={medicalScan.options.isLoading}
        onClick={() => dispatch(pushMedicalScan())}
      >
        Add
      </button>
    </div>
  );
};

export default MedicalScanSearch;
