import defaultState from './defaultState';
import produce from 'immer';

const appReducer = produce((draft, action) => {
  switch (action.type) {
    case 'LOADING_APPOINTMENT_LIST':
      draft.appointment.isLoading = true;
      draft.appointment.list = [];
      draft.appointment.map = {};
      break;

    case 'LOADED_APPOINTMENT_LIST':
      draft.appointment.isLoading = false;
      draft.appointment.list = action.list;

      const map = {};
      for (const ap of action.list) {
        map[ap.id] = ap;
      }
      draft.appointment.map = map;
      break;

    case 'LOADING_MEDICAL_SCAN_OPTIONS':
      draft.medicalScan.options.isLoading = true;
      draft.medicalScan.options.list = [];
      draft.medicalScan.options.map = {};
      break;

    case 'LOADED_MEDICAL_SCAN_OPTIONS': {
      const list = action.list.map((ms) => ({
        name: ms.name,
        amount: ms.amount,
        maxDiscount: ms.discountType === '%' ? (ms.amount * ms.maxDiscount) / 100 : ms.maxDiscount,
        discountType: ms.discountType,
        modality: ms.modality,
      }));

      const map = {};
      for (const item of list) {
        map[item.name] = item;
      }

      draft.medicalScan.options.isLoading = false;
      draft.medicalScan.options.list = list;
      draft.medicalScan.options.map = map;
      break;
    }

    case 'SELECT_MEDICAL_SCAN': {
      draft.medicalScan.select = draft.medicalScan.options.map[action.name];

      // update discount range
      const ms = draft.medicalScan.select;
      let discount = draft.medicalScan.discount;
      if (discount < 0) {
        discount = 0;
      } else if (discount > ms.maxDiscount) {
        discount = ms.maxDiscount;
      }
      draft.medicalScan.discount = discount;
      break;
    }

    case 'SET_MEDICAL_SCAN_DISCOUNT': {
      const ms = draft.medicalScan.select;

      // check discount range
      let discount = action.discount;
      if (discount < 0) {
        discount = 0;
      } else if (discount > ms.maxDiscount) {
        discount = ms.maxDiscount;
      }
      draft.medicalScan.discount = discount;
      break;
    }

    case 'PUSH_MEDICAL_SCAN': {
      const { select: ms, discount, scanList } = draft.medicalScan;
      scanList.push({
        name: ms.name,
        amount: ms.amount,
        discount,
      });
      break;
    }

    case 'DELETE_MEDICAL_SCAN': {
      const { scanList } = draft.medicalScan;
      draft.medicalScan.scanList = [
        ...scanList.slice(0, action.index),
        ...scanList.slice(action.index + 1),
      ];
      break;
    }
  }

  return draft;
}, defaultState);

export default appReducer;
