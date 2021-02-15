import { useDispatch, useSelector } from 'react-redux';

import { deletePatientBillingScan } from '../store/actionCreators';

const MedicalScanTable = () => {
  const dispatch = useDispatch();
  const scanList = useSelector((s) => s.ui.medicalScanDetails.scanList);

  if (scanList.length === 0) {
    return (
      <div className="medical-scan-table">
        <div className="empty">At least scan is required</div>
      </div>
    );
  }

  return (
    <table className="medical-scan-table">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Scan Name</th>
          <th>Scan Amount</th>
          <th>Discount</th>
          <th>Total Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {scanList.map((mb, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{mb.name}</td>
            <td>{mb.amount}</td>
            <td>{mb.discount}</td>
            <td>{mb.amount - mb.discount}</td>
            <td>
              <button onClick={() => dispatch(deletePatientBillingScan(index))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicalScanTable;
