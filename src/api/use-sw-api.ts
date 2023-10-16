import { useMemo } from 'react';
import { SWApiResource } from '../enums';
import useApi, { ApiRequest } from './use-api';
import {
  ApiResponseListResponse,
  ApiResponseSingleResponse,
} from './api.interfaces';

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
  }, [resource, id]);

  const [data, error] = useApi<T>(request);

  if (error) {
    throw new Error(error);
  }

  return data;
};

export const useStarWarsList = (
  resource: SWApiResource
): ApiResponseListResponse | null => {
  return useStarWarsApi<ApiResponseListResponse>(resource);
};

export const useStarWarsEntry = <T>(
  resource: SWApiResource,
  id: string
): ApiResponseSingleResponse<T> | null => {
  return useStarWarsApi<ApiResponseSingleResponse<T>>(resource, id);
};
