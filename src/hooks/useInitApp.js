import { fetchMedicalBillingList } from '../store/asyncActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useInitApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMedicalBillingList(dispatch);
  }, []);
};

export default useInitApp;
