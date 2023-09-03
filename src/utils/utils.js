import { toast } from "react-toastify";

export const notify = (type, message) => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else if (type === "warn") {
    toast.warn(message);
  } else if (type === "info") {
    toast.info(message);
  }
};

export const TOAST_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
};

export const getToken = () => localStorage.getItem("token");
export const removeToken = () => localStorage.removeItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
