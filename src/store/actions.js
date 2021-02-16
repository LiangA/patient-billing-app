export const setAppointmentSearchCriteria = (fromDate, toDate, status) => ({
  type: 'SET_APPOINTMENT_SEARCH_CRITERIA',
  fromDate,
  toDate,
  status,
});

export const selectMedicalScan = (name) => ({
  type: 'SELECT_MEDICAL_SCAN',
  name,
});

export const setMedicalScanDiscount = (discount) => ({
  type: 'SET_MEDICAL_SCAN_DISCOUNT',
  discount,
});

export const pushMedicalScan = () => ({
  type: 'PUSH_MEDICAL_SCAN',
});

export const deleteMedicalScan = (index) => ({
  type: 'DELETE_MEDICAL_SCAN',
  index,
});

export const resetAddPatientAppointment = () => ({
  type: 'RESET_ADD_PATIENT_APPOINTMENT',
});
