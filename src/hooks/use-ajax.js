import { useState } from 'react';

function useAJAX() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(requestConfig, applyDataFn) {
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

      if (!response.ok) {
        throw new Error('Fetch request failed!');
      }

      const data = await response.json();

      applyDataFn(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  return { isLoading, error, sendRequest };
}

export default useAJAX;
