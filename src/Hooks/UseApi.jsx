import { useState } from "react";

function UseApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [catchError, setCatchError] = useState(false);
  const [responseError, setResponseError] = useState(true);

  
    setIsLoading(true);
    async function fetchData(url, method, verification, form) {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${verification}`,
          },
          body: JSON.stringify(form),
        });
        setResponseError(!response.ok);
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
  

  return { data, isLoading, catchError, responseError };
}

export default UseApi;
