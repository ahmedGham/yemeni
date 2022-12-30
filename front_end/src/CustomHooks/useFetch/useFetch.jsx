import { useReducer } from "react";
import { useEffect } from "react";
import { fetchInitialState } from "./fetchReducer";
import fetchReducer from "./fetchReducer";
import {FETCH_ACTIONS} from './fetchReducer'


const useFetch = (url) => {
  const [fetchStatus, dispatch] = useReducer(fetchReducer, fetchInitialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json();
          dispatch({ type: FETCH_ACTIONS.SUCCESS,data :data });
        } else {
          throw new Error(response.er);
        }
      } catch (e) {
        dispatch({ type: FETCH_ACTIONS.ERROR });
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return fetchStatus;
};

export default useFetch;
