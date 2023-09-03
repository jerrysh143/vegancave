import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  (config) => {
    config.baseURL = baseURL;
    // ** Get token from localStorage
    const accessToken = localStorage.getItem("token");

    // ** If token is present add it to request's Authorization Header
    if (accessToken && config.headers) {
      // ** eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response && response.data && response.data.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const axiosPost = (url: string, data: any = {}, params: any = {}) => {
  return axios
    .post(baseURL + url, data, { params })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const axiosGet = (url: string, params: any = {}) => {
  return axios
    .get(baseURL + url, { params })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const axiosPut = (url: string, data: any = {}, params: any = {}) => {
  return axios
    .put(baseURL + url, data, { params })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const axiosPatch = (url: string, data: any = {}, params: any = {}) => {
  return axios
    .patch(baseURL + url, data, { params })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const axiosDelete = (url: string, data: any = {}, params: any = {}) => {
  return axios
    .delete(baseURL + url, { params, data })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export default axios;
