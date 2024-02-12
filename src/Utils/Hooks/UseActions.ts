
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useAction = (action: any) => {

  const dispatch = useDispatch();


  return useCallback(() =>
    dispatch(action)
    , [dispatch, action]);

};