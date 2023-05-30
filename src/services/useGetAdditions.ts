import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useState } from "react";

import {
  dataLoading,
  setAdditions,
} from "../store/slices/userDashboardSlice";

import { additions } from "../constants/mockData";

const useGetAdditions = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");

  const getAdditions = async (): Promise<void> => {
    dispatch(dataLoading());

    try {
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        dispatch(setAdditions(additions));
      }, 900);
    } catch (error) {
      setErrorMsg(errorMsg);
      console.error("Error fetching additions:", error);
    }

    return Promise.resolve();
  };

  return { getAdditions, errorMsg };
};

export default useGetAdditions;
