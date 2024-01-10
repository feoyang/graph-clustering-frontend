import { atom, useSetAtom } from "jotai";
import { request } from "../../../utils";
import { AxiosError } from 'axios';

const getUserInfo = async (loginForm: { username: string, password: string, rememberMe: boolean }) => {
    const res = await request.post('/login', loginForm)
    return res
}

// Jotai implementation
const userAtom = atom<string>("");
const tokenAtom = atom<string>("");

export { userAtom, tokenAtom, getUserInfo };