// axios instance
import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_SERVER_NAME;
const MOCK_SERVER_NAME = import.meta.env.VITE_MOCK_SERVER_NAME;

export const instance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? MOCK_SERVER_NAME : API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 아직 token 어떻게 주는 지 정의 X
    // TODO: 백엔드에서 토큰 예외처리로 인해 토큰이 필요한 경우에만 보내주기

    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const axiosError = error as AxiosError;
    const errorMessage = axiosError.message;

    console.log("응답에러 메세지: ", errorMessage);

    return Promise.reject(axiosError);
  },
);
