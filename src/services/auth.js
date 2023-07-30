import { axiosPost } from "../axios/axios-config.ts";

export const signup = (data) => axiosPost("/register/", data);

export const login = (data) => axiosPost("/login/", data);
