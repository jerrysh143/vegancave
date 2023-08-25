import { axiosGet, axiosPost } from "../axios/axios-config.ts";

export const signup = (data) => axiosPost("/register/", data);

export const login = (data) => axiosPost("/login/", data);

export const getPageData = (page) => axiosGet("/getPageData", page);

export const getProducts = () => axiosGet("/products");

export const getProductCategories = () => axiosGet("/categories");
