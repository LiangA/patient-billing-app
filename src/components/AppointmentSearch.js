const AppointmentSearch = () => {
  return (
    <div className="appointment-search">
      <div>
        <div className="label">Form Date</div>
        <input type="date" />
      </div>

      <div>
        <div className="label">To Date</div>
        <input type="date" />
      </div>

      <div>
        <div className="label">Status</div>
        <select>
          <option value="NOT_YET_BILLED">Not yet Billed</option>
          <option value="DUE_BILLED">Due Billed</option>
          <option value="FULLY_BILLED">Fully Billed</option>
        </select>
      </div>

      <div>
        <div className="label">Common Search</div>
        <input type="text" />
      </div>

      <button className="search-button">Search</button>
    </div>
  );
};

export default AppointmentSearch;
