import { useMemo } from 'react';
import { SWApiResource } from '../enums';
import useApi, { ApiRequest } from './use-api';
import { ApiResponseListResponse, ApiResponseSingleResponse } from '../models';

const createRequestUrl = (base: string, path: string, id?: string): string => {
  if (id) {
    return `${base}/${path}/${id}`;
  }

  //in this example we want to fetch the whole list
  return `${base}/${path}?page=1&limit=0`;
};

const useStarWarsApi = <T>(resource: SWApiResource, id?: string): T | null => {
  const request: ApiRequest = useMemo(() => {
    const url = createRequestUrl(import.meta.env.VITE_API_URL, resource, id);
    return {
      input: new Request(url),
    };
  }, []);

  const [data] = useApi<T>(request);

  return data;
};

export const getStarWarsList = (
  resource: SWApiResource
): ApiResponseListResponse | null => {
  return useStarWarsApi<ApiResponseListResponse>(resource);
};

export const getStarWarsEntry = <T>(
  resource: SWApiResource,
  id: string
): ApiResponseSingleResponse<T> | null => {
  return useStarWarsApi<ApiResponseSingleResponse<T>>(resource, id);
};
