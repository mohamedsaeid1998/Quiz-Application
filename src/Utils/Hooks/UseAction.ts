import React, { useCallback } from "react";
import { useDispatch } from "react-redux";



const useAction = (action: any) => {
  const dispatch = useDispatch();
  return useCallback(
    async (data: any) => {
      const response = await dispatch(action(data));
      return response?.payload;
    },
    [dispatch, action]
  );
};

export default useAction;

// import { useCallback } from "react";
// import { useDispatch } from "react-redux";

// const useAction = (action:any) => {
//   const dispatch = useDispatch();
//   const handleAction = useCallback(async (data:any) => {
//     const response = await dispatch(action(data));
//     return response?.payload;
//   }, [dispatch, action]);

//   return handleAction;
// };

// export default useAction;