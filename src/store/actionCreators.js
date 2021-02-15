export const selectMedicalBilling = (name) => ({
  type: 'SELECT_MEDICAL_BILLING',
  name,
});

export const setMedicalBillingDiscount = (discount) => ({
  type: 'SET_MEDICAL_BILLING_DISCOUNT',
  discount,
});
