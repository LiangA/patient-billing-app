import {
  selectMedicalBilling,
  setMedicalBillingDiscount,
  pushPatientBillingScan,
} from '../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';

const PatientBillingSearchBar = () => {
  const dispatch = useDispatch();
  const medicalBilling = useSelector((s) => s.data.medicalBilling);
  const ui = useSelector((s) => s.ui.medicalScanDetails);

  return (
    <div className="medical-scan-details-search-bar">
      <div>
        <span className="label">Scan List</span>
        <Select
          className="select"
          isLoading={medicalBilling.isLoading}
          isSearchable={true}
          components={{ DropdownIndicator: null }}
          options={medicalBilling.list.map((mb) => ({
            label: mb.name,
            value: mb.name,
          }))}
          onChange={({ value }) => dispatch(selectMedicalBilling(value))}
        />
      </div>

      <div>
        <span className="label">Scan Amount</span>
        <span>{ui.selectedMedicalBilling.amount || 0}</span>
      </div>

      <div className="discount">
        <span className="label">Discount</span>
        <input
          type="number"
          disabled={medicalBilling.isLoading}
          min="0"
          max={ui.selectedMedicalBilling.maxDiscount || 0}
          value={ui.discount || 0}
          onChange={(e) => {
            const discount = Number.parseInt(e.target.value, 10);
            dispatch(setMedicalBillingDiscount(discount));
          }}
        />
      </div>

      <button
        className="add-button"
        disabled={medicalBilling.isLoading}
        onClick={() => dispatch(pushPatientBillingScan())}
      >
        Add
      </button>
    </div>
  );
};

export default PatientBillingSearchBar;
