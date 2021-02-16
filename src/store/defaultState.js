const defaultState = {
  appointmentSearch: {
    fromDate: '',
    toDate: '',
    status: 'NOT_YET_BILLED',
  },

  // View Appointment Page
  appointment: {
    isLoading: true,
    list: [],
    map: {},
  },

  // Add Patient Appointment Page
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
