const TransactionTable = ({ paymentList }) => {
  if (paymentList.length === 0) {
    return (
      <div className="transaction-table">
        <div className="empty">No Transaction</div>
      </div>
    );
  }

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Date</th>
          <th>Paid Amount</th>
          <th>Payment mode</th>
        </tr>
      </thead>
      <tbody>
        {paymentList.map((payment, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.date}</td>
              <td>{payment.paidAmount}</td>
              <td>{payment.mode}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionTable;
