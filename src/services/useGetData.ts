import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { additionsLoading, setAdditions } from "../store/slices/additionsSlice";
import { additions } from "../constants/mockData";
import { useState } from "react";

const useGetData = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");

  const getData = async (dataType: string): Promise<void> => {
    dispatch(additionsLoading());

    try {
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        if (dataType === "additions") {
          dispatch(setAdditions(additions));
        }
      }, 300);
    } catch (error) {
      setErrorMsg(errorMsg);
      console.error("Error fetching additions:", error);
    }

    return Promise.resolve();
  };

  return { getData, errorMsg };
};

export default useGetData;
