import { type AxiosRequestConfig, type AxiosResponse, AxiosError } from 'axios';
import type { IResponse } from './types';
import { httpFactory } from './fetcher';
import { message } from 'antd';

export const http = httpFactory();


// 自定义类型谓词函数用于检查是否是 AxiosResponse
function isAxiosResponse<T = any>(variable: any): variable is AxiosResponse<IResponse<T>> {
  return variable && variable.config && variable.data !== undefined;
}

// 自定义类型谓词函数用于检查是否是 AxiosError
function isAxiosError<T = any>(variable: any): variable is AxiosError<IResponse<T>> {
  return variable && variable.isAxiosError === true;
}

export const transformResponse = <T = any> (axiosResponse: AxiosResponse<IResponse<T>> | AxiosError<IResponse<T>>): IResponse<T> | undefined => {
  // 检查参数的类型是 AxiosResponse 还是 AxiosError
  if (isAxiosResponse<IResponse<T>>(axiosResponse)) {
    return axiosResponse.data?.data || {} as any;
  } else if (isAxiosError<IResponse<T>>(axiosResponse)) {
    return axiosResponse.response?.data || {} as any;
  }
  throw new Error('未知错误');
};

const del = async <T = any>(url: string, config?: AxiosRequestConfig) => {
  return await http.delete<AxiosResponse<IResponse<T>>>(
    url,
    config,
  );
};

const post = async <T = any>(url: string, data: any, config?: AxiosRequestConfig) => {
  return await http.post<AxiosResponse<IResponse<T>>>(
    url,
    data,
    config,
  );
};

const get = async <T = any>(url: string, config?: AxiosRequestConfig) => {
  return await http.get<AxiosResponse<IResponse<T>>>(
    url,
    config,
  );
};

const patch = async <T = any>(url: string, data: any, config?: AxiosRequestConfig) => {
  return await http.patch<AxiosResponse<IResponse<T>>>(
    url,
    data,
    config,
  );
};

const put = async <T = any>(url: string, data: any, config?: AxiosRequestConfig) => {
  return await http.put<AxiosResponse<IResponse<T>>>(
    url,
    data,
    config,
  );
};

export const request = {
  delete: del,
  post,
  get,
  patch,
  put,
};

