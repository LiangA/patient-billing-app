const defaultState = {
  // View Appointment Page
  appointment: {
    isLoading: true,
    list: [],
    map: {},
  },

  // Add Patient Appointment Page
  patient: {
    salutation: 'MR',
    name: 'Hari Haran',
    gender: 'Male',
    dob: '1994-05-12',
    age: 27,
    ageType: 'Year',
    appointmentDate: '2016-05-12',
    phone: '8571234567',
    address: '311 Arsenal St, Watertown, MA 02472',
  },

  medicalScan: {
    options: {
      isLoading: true,
      list: [],
      map: {},
    },
    select: {},
    discount: 0,
    scanList: [],
  },
};

export default defaultState;
