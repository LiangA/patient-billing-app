// prettier-ignore
const MEDICAL_BILLING_TABLE = [
  ['CT BRAIN',        2000, 100, 'INR', 'CT'],
  ['CT PNS',          1000, 200, 'INR', 'CT'],
  ['MRI BRAIN',       3000, 300, 'INR', 'MRI'],
  ['MRI PNS',         2400, 30,  '%',   'MRI'],
  ['GLUCOSE FASTING', 130,  10,  '%',   'LAB'],
  ['SUGAR TESTING',   300,  5,   '%',   'LAB'],
];

const MODALITY_TABLE = [
  ['CT', 7],
  ['MRI', 6],
  ['LAB', Number.MAX_SAFE_INTEGER],
];

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

  appointmentList: [
    {
      id: 'ADY12004',
      date: '2016-05-12',
      patient: {
        salutation: 'MR',
        name: 'Hari Haran',
        gender: 'Male',
        dob: '1994-05-12',
        age: 27,
        ageType: 'Year',
        phone: '8571234567',
        address: '311 Arsenal St, Watertown, MA 02472',
      },
      medicalScanList: [
        { name: 'GLUCOSE FASTING', amount: 300, discount: 10 },
        { name: 'MRI BRAIN', amount: 70, discount: 0 },
      ],
      paymentList: [
        {
          date: '2020-02-03',
          paidAmount: 25,
          mode: 'CARD',
        },
        {
          date: '2020-02-06',
          paidAmount: 105,
          mode: 'CASH',
        },
      ],
    },
  ],
};

export default db;
