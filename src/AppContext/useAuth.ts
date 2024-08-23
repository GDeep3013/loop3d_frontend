import { useEffect, useReducer } from 'react';
import { appReducer, initialState } from './reducer';

const useAuth = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log(state,"steeee")

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      dispatch({ type: 'SET_LOADING', payload: false });
    } else {
      // Implement token validation logic if necessary
      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({ type: 'SET_STATUS', payload: true });
    }
  }, [dispatch]);

  return {
    state,
    dispatch,
  };
};

export default useAuth;
