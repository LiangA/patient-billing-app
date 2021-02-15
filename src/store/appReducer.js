import produce from 'immer';

const defaultState = {
  data: {
    medicalBilling: {
      list: [],
      isLoading: false,
    },
  },
};

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case 'LOADING_MEDICAL_BILLING_LIST':
      draft.data.medicalBilling.isLoading = true;
      draft.data.medicalBilling.list = [];
      break;

    case 'LOADED_MEDICAL_BILLING_LIST':
      draft.data.medicalBilling.isLoading = false;
      draft.data.medicalBilling.list = action.list;
      break;
  }

  return draft;
}, defaultState);

export default appReducer;
