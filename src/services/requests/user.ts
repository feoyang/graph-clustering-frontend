import { getToken } from "../../authorization/token.ts";
import { User } from "../../data/entities/user.ts";
import { request, transformResponse } from "../core/http.ts";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpStatusCode } from "axios";

interface RequestLoginParams {
  account: string;
  password: string;
  remember: boolean;
}

const requestLogin = async (params: RequestLoginParams) => {
  const res = await request.post("/login", params);
  return transformResponse(res);
};

interface RequestRegisterParams {
  account: string;
  password: string;
}

const requestRegister = async (params: RequestRegisterParams) => {
  const res = await request.post("/register", params);
  return transformResponse(res);
};

const requestUserProfile = async () => {
  const res = await request.get("/profile");
  return transformResponse(res);
};

export { requestLogin, requestRegister, requestUserProfile };
