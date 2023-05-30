import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useState } from "react";

import {
  setCategories,
  dataLoading,
  setTotalCompleted,
} from "../store/slices/userDashboardSlice";
import { categories } from "../constants/mockData";
import { calculatePerformance } from "../utils/calculatePerformance";

const useGetCategories = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");

  const getCategories = async (): Promise<void> => {
    dispatch(dataLoading());

    try {
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        dispatch(setCategories(categories));
        const totalPerformance = calculatePerformance(categories);
        dispatch(setTotalCompleted(totalPerformance));
      }, 900);
    } catch (error) {
      setErrorMsg(errorMsg);
      console.error("Error fetching additions:", error);
    }

    return Promise.resolve();
  };

  return { getCategories, errorMsg };
};

export default useGetCategories;
