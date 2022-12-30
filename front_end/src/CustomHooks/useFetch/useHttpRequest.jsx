import React, { useState } from "react";
import { useCallback } from "react";

const useHttpRequest = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, handleData) => {
    setIsloading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw Error(response.text);
      }

      const data = await response.json();

      // console.log(handleData)

      handleData(data);

    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
