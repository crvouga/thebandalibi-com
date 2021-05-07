import { createProxyMiddleware } from "http-proxy-middleware";
import {
  getPrintfulApiAuthroizationHeader,
  PRINTFUL_API_BASE_URL,
  PRINTFUL_PROXY_ENDPOINT,
} from "./printful-constants";

export const nextConfig = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export const printfulProxy = createProxyMiddleware({
  target: PRINTFUL_API_BASE_URL,
  logLevel: process.env.NODE_ENV === "production" ? "silent" : "warn",
  pathRewrite: {
    [`^${PRINTFUL_PROXY_ENDPOINT}`]: "",
  },
  changeOrigin: true,
  onProxyReq: async (proxyReq, _req, _res) => {
    proxyReq.setHeader("Authorization", getPrintfulApiAuthroizationHeader());
  },
});
