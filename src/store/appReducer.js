import produce from 'immer';

const defaultState = {
  data: {
    medicalBilling: {
      isLoading: true,
      list: [],
      map: {},
    },
  },

  ui: {
    medicalScanDetails: {
      selectedMedicalBilling: {},
      discount: 0,
    },
  },
};

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case 'LOADING_MEDICAL_BILLING_LIST':
      draft.data.medicalBilling.isLoading = true;
      draft.data.medicalBilling.list = [];
      draft.data.medicalBilling.map = {};
      break;

    case 'LOADED_MEDICAL_BILLING_LIST': {
      const list = action.list.map((mb) => ({
        name: mb.name,
        amount: mb.amount,
        maxDiscount: mb.discountType === '%' ? (mb.amount * mb.maxDiscount) / 100 : mb.maxDiscount,
        discountType: mb.discountType,
        modality: mb.modality,
      }));

      const map = {};
      for (const item of list) {
        map[item.name] = item;
      }

      draft.data.medicalBilling.isLoading = false;
      draft.data.medicalBilling.list = list;
      draft.data.medicalBilling.map = map;
      break;
    }

    case 'SELECT_MEDICAL_BILLING': {
      draft.ui.medicalScanDetails.selectedMedicalBilling =
        draft.data.medicalBilling.map[action.name];

      // update discount range
      const mb = draft.ui.medicalScanDetails.selectedMedicalBilling;
      let discount = draft.ui.medicalScanDetails.discount;
      if (discount < 0) {
        discount = 0;
      } else if (discount > mb.maxDiscount) {
        discount = mb.maxDiscount;
      }
      draft.ui.medicalScanDetails.discount = discount;
      break;
    }

    case 'SET_MEDICAL_BILLING_DISCOUNT': {
      const mb = draft.ui.medicalScanDetails.selectedMedicalBilling;

      // check discount range
      let discount = action.discount;
      if (discount < 0) {
        discount = 0;
      } else if (discount > mb.maxDiscount) {
        discount = mb.maxDiscount;
      }
      draft.ui.medicalScanDetails.discount = discount;
      break;
    }
  }

  return draft;
}, defaultState);

export default appReducer;
