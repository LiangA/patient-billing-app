import db from './db';
import { delay } from '../utils';
import moment from 'moment';
import produce from 'immer';

export const getMedicalBillingList = async () => {
  await delay(1000);
  return db.medicalBillingList;
};

export const getModalityList = async () => {
  await delay(1000);
  return db.modalityList;
};

export const getAppointmentList = async () => {
  await delay(1000);
  return db.appointmentList;
};

export const postAppointment = async (appointment) => {
  await delay(1000);
  db.appointmentList = produce(db.appointmentList, (appointmentList) => {
    appointmentList.push(appointment);
  });
  return;
};

export const postPayment = async (appointmentId, amount, mode) => {
  db.appointmentList = produce(db.appointmentList, (appointmentList) => {
    for (const ap of appointmentList) {
      if (ap.id === appointmentId) {
        ap.paymentList.push({
          date: moment().format('YYYY-MM-DD'),
          paidAmount: amount,
          mode,
        });
      }
    }
  });
};
