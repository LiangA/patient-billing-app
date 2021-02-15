import { MEDICAL_BILLING_TABLE, MODALITY_TABLE } from './data';

const db = {
  medicalBillingList: MEDICAL_BILLING_TABLE.map((item) => ({
    name: item[0],
    amount: item[1],
    maxDiscount: item[2],
    discountType: item[3],
    modality: item[4],
  })),

  modalityList: MODALITY_TABLE.map((item) => ({
    name: item[0],
    maxSlotPerDay: item[1],
  })),
};

export default db;
