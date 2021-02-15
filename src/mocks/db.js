import { MEDICAL_BILLING_LIST, MODALITY_LIST } from './data';

const db = {
  medicalBillingList: MEDICAL_BILLING_LIST.map((item) => ({
    name: item[0],
    amount: item[1],
    maxDiscount: item[2],
    discountType: item[3],
    modality: item[4],
  })),

  modalityList: MODALITY_LIST.map((item) => ({
    name: item[0],
    maxSlotPerDay: item[1],
  })),
};

export default db;
