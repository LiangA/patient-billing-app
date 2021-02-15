import db from './db';
import { delay } from '../utils';

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
  db.appointmentList.push(appointment);
  return;
};
