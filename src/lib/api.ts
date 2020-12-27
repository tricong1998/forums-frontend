import axios, { AxiosRequestConfig, AxiosError } from "axios";

/**
 * Axios instance with `access-token` header injected
 */
export const apiClient = axios.create();

/**
 * Axios without `access-token`
 */
export const apiClientWithoutAuth = axios;

export type PaginationParams = {
  page?: number;
  perPage?: number;
};

export function filterWithoutEmptyString(params: object) {
  const result: any = {};
  Object.entries(params).forEach(([value, index]) => {
    if (value !== "") {
      result[index] = value;
    }
  });
  return result;
}

export const fetchPaginatedData = <
  Record,
  Filter extends PaginationParams = PaginationParams
>(
  url: string,
  filter: Filter,
  config: AxiosRequestConfig = {}
) => {
  const source = axios.CancelToken.source();
  const request = apiClient
    .get<Record[]>(url, {
      cancelToken: source.token,
      ...config,
      params: {
        ...config.params,
        ...filterWithoutEmptyString(filter),
      },
    })
    .then((res) => {
      return { items: res.data || [], isEmpty: res.data.length === 0 };
    })
    .catch((e) => {
      if (!axios.isCancel(e)) {
        throw e;
      }
    });
  (request as any).cancel = () => source.cancel();

  return request as Promise<{
    items: Record[];
    isEmpty: boolean;
  }>;
};

export const getData = <Record>(
  url: string,
  config: AxiosRequestConfig = {}
) => {
  const source = axios.CancelToken.source();

  const request = axios
    .get(url, { ...config, cancelToken: source.token })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      if (!axios.isCancel(err)) {
        throw err;
      }
    });

  return request as Promise<Record>;
};
