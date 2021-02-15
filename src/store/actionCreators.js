export const selectMedicalBilling = (name) => ({
  type: 'SELECT_MEDICAL_BILLING',
  name,
});

export const setMedicalBillingDiscount = (discount) => ({
  type: 'SET_MEDICAL_BILLING_DISCOUNT',
  discount,
});

export const pushPatientBillingScan = () => ({
  type: 'PUSH_MEDICAL_BILLING_SCAN',
});

export const deletePatientBillingScan = (index) => ({
  type: 'DELETE_MEDICAL_BILLING_SCAN',
  index,
});
