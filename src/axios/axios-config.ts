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

const setLoader = (shouldShow: boolean, status: boolean) => {
  /* Todo: set global processing loader true or false */
  // if (shouldShow) {
  //   store.dispatch(setProcessing(status));
  // }
};

export const axiosPost = (
  url: string,
  data: any = {},
  params: any = {},
  shouldProcess: boolean = false
) => {
  setLoader(shouldProcess, true);
  return axios
    .post(baseURL + url, data, { params })
    .then((res) => {
      setLoader(shouldProcess, false);
      return res;
    })
    .catch((error) => {
      setLoader(shouldProcess, false);
      // return {
      //     error: error.response?.data?.message?.text ?? "Error while processing",
      // };
      return {
        error: "Error while processing",
      };
    });
};

export const axiosGet = (
  url: string,
  params: any = {},
  shouldProcess: boolean = false
) => {
  setLoader(shouldProcess, true);
  return axios
    .get(baseURL + url, { params })
    .then((res) => {
      setLoader(shouldProcess, false);
      return res;
    })
    .catch((error) => {
      setLoader(shouldProcess, false);
      // return {
      //     error: error.response?.data?.message?.text ?? "Error while processing",
      // };
      return {
        error: "Error while processing",
      };
    });
};

export const axiosPut = (
  url: string,
  data: any = {},
  params: any = {},
  shouldProcess: boolean = false
) => {
  setLoader(shouldProcess, true);
  return axios
    .put(baseURL + url, data, { params })
    .then((res) => {
      setLoader(shouldProcess, false);
      return res;
    })
    .catch((error) => {
      setLoader(shouldProcess, false);
      // return {
      //     error: error.response?.data?.message?.text ?? "Error while processing",
      // };
      return {
        error: "Error while processing",
      };
    });
};

export const axiosPatch = (
  url: string,
  data: any = {},
  params: any = {},
  shouldProcess: boolean = false
) => {
  setLoader(shouldProcess, true);
  return axios
    .patch(baseURL + url, data, { params })
    .then((res) => {
      setLoader(shouldProcess, false);
      return res;
    })
    .catch((error) => {
      setLoader(shouldProcess, false);
      // return {
      //     error: error.response?.data?.message?.text ?? "Error while processing",
      // };
      return {
        error: "Error while processing",
      };
    });
};

export const axiosDelete = (
  url: string,
  data: any = {},
  params: any = {},
  shouldProcess: boolean = false
) => {
  setLoader(shouldProcess, true);
  return axios
    .delete(baseURL + url, { params, data })
    .then((res) => {
      setLoader(shouldProcess, false);
      return res;
    })
    .catch((error) => {
      setLoader(shouldProcess, false);
      // return {
      //     error: error.response?.data?.message?.text ?? "Error while processing",
      // };
      return {
        error: "Error while processing",
      };
    });
};

export default axios;
