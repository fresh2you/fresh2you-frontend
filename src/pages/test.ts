import { V1 } from "../../models/V1";

const api = new V1({
  baseURL: import.meta.env.VITE_API_SERVER_NAME,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

api.instance.interceptors.request.use(
  (config) => {
    // TODO: 백엔드에서 토큰 예외처리로 인해 토큰이 필요한 경우에만 보내주기
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ``;

    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);

export default api;
