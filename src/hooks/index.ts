import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { Api } from '../providers';

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error>({} as Error);

  useEffect(() => {
    Api.get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [options, url]);

  return { data, error, isFetching };
}
