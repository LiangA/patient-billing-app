import { fetchMedicalScanOptions, fetchAppointmentList } from '../store/asyncActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useInitApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMedicalScanOptions(dispatch);
    fetchAppointmentList(dispatch);
  }, []);
};

export default useInitApp;
