import { useState, useCallback } from 'react';

function useAJAX() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyDataFn = null) => {
    const { url, options = null } = requestConfig;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        url,
        options
          ? {
              method: options.method,
              headers: options.headers,
              body: JSON.stringify(options.body),
            }
          : null
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Fetch request failed! (${data.status})`);
      }

      if (applyDataFn) {
        applyDataFn(data);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
}

export default useAJAX;
