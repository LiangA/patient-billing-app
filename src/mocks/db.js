const db = {};

// prettier-ignore
db.medicalBillingList = [
  ['CT BRAIN',        2000, 100, 'INR', 'CT'],
  ['CT PNS',          1000, 200, 'INR', 'CT'],
  ['MRI BRAIN',       3000, 300, 'INR', 'MRI'],
  ['MRI PNS',         2400, 30,  '%',   'MRI'],
  ['GLUCOSE FASTING', 130,  10,  '%',   'LAB'],
  ['SUGAR TESTING',   300,  5,   '%',   'LAB'],
].map((item) => ({
  name: item[0],
  amount: item[1],
  maxDiscount: item[2],
  discountType: item[3],
  modality: item[4],
}));

// prettier-ignore
db.modalityList = [
  ['CT',  7],
  ['MRI', 6],
  ['LAB', Number.MAX_SAFE_INTEGER],
].map((item) => ({
  name: item[0],
  maxSlotPerDay: item[1],
}));

export default db;
