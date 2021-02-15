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
