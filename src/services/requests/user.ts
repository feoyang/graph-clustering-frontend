import { request, transformResponse } from '../core/http.ts';

interface RequestLoginParams {
  username: string;
  password: string;
  rememberMe: boolean;
}

export async function requestLogin(params: RequestLoginParams) {
  const res = await request.post('/login', params);
  return transformResponse(res);
}

interface RequestRegisterParams {
  username: string;
  password: string;
}

export async function requestRegister(params: RequestRegisterParams) {
  const res = await request.post('/register', params);
  return transformResponse(res);
}
