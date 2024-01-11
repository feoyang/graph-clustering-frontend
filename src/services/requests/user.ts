import { request, transformResponse } from '../core/http.ts';

interface RequestLoginParams {
  account: string;
  password: string;
  remember: boolean;
}

const requestLogin = async (params: RequestLoginParams) => {
  const res = await request.post('/login', params);
  return transformResponse(res);
}

interface RequestRegisterParams {
  account: string;
  password: string;
}

const requestRegister = async (params: RequestRegisterParams) => {
  const res = await request.post('/register', params);
  return transformResponse(res);
}

export {requestLogin, requestRegister}
