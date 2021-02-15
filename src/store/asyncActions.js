import * as MockAPI from '../mocks/api';

export const fetchMedicalBillingList = async (dispatch) => {
  dispatch({ type: 'LOADING_MEDICAL_BILLING_LIST' });
  const list = await MockAPI.getMedicalBillingList();
  dispatch({ type: 'LOADED_MEDICAL_BILLING_LIST', list });
};
