import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    return fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => setData(data))
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isError, isLoading };
};

export default useFetch;
