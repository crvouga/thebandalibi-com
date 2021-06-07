import axios from "axios";
import {
  getPrintfulApiAuthroizationHeader,
  PRINTFUL_API_BASE_URL,
  PRINTFUL_PROXY_ENDPOINT,
} from "./printful-constants";

export const PrintfulApi = () => {
  if (process.browser) {
    return axios.create({
      baseURL: PRINTFUL_PROXY_ENDPOINT,
    });
  }

  const serverApi = axios.create({
    baseURL: PRINTFUL_API_BASE_URL,
  });

  serverApi.interceptors.request.use((config) => {
    config.headers.authorization = getPrintfulApiAuthroizationHeader();
    return config;
  });

  return serverApi;
};
