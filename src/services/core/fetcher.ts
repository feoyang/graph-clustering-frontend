import { InternalAxiosRequestConfig } from 'axios';
import { getToken } from '../../authorization/token.ts';
import type { IHttpInstance, RequestInterceptor, ResponseInterceptor } from './tools.ts';
import { baseHttpFactory } from './tools.ts';

export type RequestOnFulfilled = RequestInterceptor[0];
export type RequestOnRejected = RequestInterceptor[1];
export type ResponseOnFulfilled = ResponseInterceptor[0];
export type ResponseOnRejected = ResponseInterceptor[1];


const httpRequestInterceptorFactory = () => {
  const onFulfilled: RequestOnFulfilled = (config) => {
    const { headers } = config;

    const token = getToken();

    return {
      ...config,
      headers: {
        ...headers,
        ...token ? { Authorization: `JWT ${token}` } : {},
      },
    } as InternalAxiosRequestConfig;
  };

  return [onFulfilled] as RequestInterceptor;
};

const httpResponseInterceptorFactory = () => {
  const onFulfilled: ResponseOnFulfilled = (res) => {
    return res;
  };

  const onRejected: ResponseOnRejected = (err) => {
    return Promise.resolve(err);
  };

  return [onFulfilled, onRejected] as ResponseInterceptor;
};

export const httpFactory = () => {
  return baseHttpFactory<IHttpInstance>({
    requestInterceptor: [httpRequestInterceptorFactory()],
    responseInterceptor: [httpResponseInterceptorFactory()],
  });
};
