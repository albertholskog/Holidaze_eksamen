import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [catchError, setCatchError] = useState(false);
  const [responseError, setResponseError] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        setResponseError(response.ok)
        const json = await response.json();
        setData(json);
        setIsLoading(false);
        setCatchError(false);
      } catch (error) {
        setCatchError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, catchError, responseError };
}

export default useApi;