import { toBase64 } from "../utility";

export const getPrintfulApiKey = () => {
  const API_KEY = process.env.PRINTFUL_API_KEY;

  if (API_KEY) {
    return API_KEY;
  }

  throw new Error("process.env.PRINTFUL_API_KEY is undefined");
};

export const getPrintfulApiAuthroizationHeader = () => {
  return `Basic ${toBase64(getPrintfulApiKey())}`;
};

export const PRINTFUL_API_BASE_URL = "https://api.printful.com/";

export const PRINTFUL_PROXY_ENDPOINT = "/api/proxy/printful";
