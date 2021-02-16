import { useDispatch, useSelector } from 'react-redux';

import { deleteMedicalScan } from '../store/actions';

const MedicalScanTable = () => {
  const dispatch = useDispatch();
  const scanList = useSelector((s) => s.medicalScan.scanList);

  if (scanList.length === 0) {
    return (
      <div className="medical-scan-table">
        <div className="empty">At least one medical scan should be selected</div>
      </div>
    );
  }

  return (
    <table className="medical-scan-table">
      <thead>
        <tr>
          <th>No.</th>
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
              <button onClick={() => dispatch(deleteMedicalScan(index))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicalScanTable;
