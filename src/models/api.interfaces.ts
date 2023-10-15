export interface ApiResponseListResult {
  uid: string;
  name: string;
  url: string;
}

export interface ApiResponseListResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: ApiResponseListResult[];
}

export interface ApiResponseSingleResult<EntryProperties> {
  properties: EntryProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface ApiResponseSingleResponse<EntryProperties> {
  message: string;
  result: ApiResponseSingleResult<EntryProperties>;
}
