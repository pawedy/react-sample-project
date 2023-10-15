import { useEffect, useState } from 'react';

export interface ApiRequest {
  input: RequestInfo | URL;
  init?: RequestInit;
}

const useApi = <T>(request: ApiRequest): [T | null, string | null] => {
  const { input, init } = request;
  const [results, setResults] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(input, init)
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setResults(result);
          setError(null);
        } else {
          const error = await response.text();
          setError(error);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [request]);

  return [results, error];
};

export default useApi;
