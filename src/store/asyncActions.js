import * as MockAPI from '../mocks/api';

export const fetchMedicalScanOptions = async (dispatch) => {
  dispatch({ type: 'LOADING_MEDICAL_SCAN_OPTIONS' });

  const modalityList = await MockAPI.getModalityList();
  const modalityMap = new Map();
  for (const modality of modalityList) {
    modalityMap.set(modality.name, modality.maxSlotPerDay);
  }

  const medicalBillingList = await MockAPI.getMedicalBillingList();
  for (const medicalBilling of medicalBillingList) {
    medicalBilling.maxSlotPerDay = modalityMap.get(medicalBilling.modality);
  }

  dispatch({ type: 'LOADED_MEDICAL_SCAN_OPTIONS', list: medicalBillingList });
};
