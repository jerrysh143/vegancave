import { axiosGet, axiosPost } from "../axios/axios-config.ts";

export const signup = (data) => axiosPost("/register/", data);

export const login = (data) => axiosPost("/login/", data);

export const getPageData = (page) => axiosGet("/getPageData", page);

// PRODUCTS
export const getProduct = (id) => axiosGet(`/products/${id}`);
export const getProducts = () => axiosGet("/products/");
export const getProductsByKey = (key) => axiosGet(`/products/${key}`);

// PRODUCT-CATEGORIES
export const getProductCategories = () => axiosGet("/categories");

// ORDERS
export const createOrder = (data) => axiosPost(`/orders/`, data);

// VOUCHER
export const applyVoucher = (data) => axiosPost(`/vouchers/`, data);

// TRANSACTIOn
export const createTransaction = (data) => axiosPost(`/transactions/`, data);

// REVIEWS
export const getReviews = (id) => axiosGet(`/reviews/${id}`);
export const createReview = (data) => axiosPost(`/reviews/`, data);

export const createContact = (data) => axiosPost(`/contacts/`, data);
