import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import JotaiProvider from "./JotaiProvider";
import { OverlayProvider } from "overlay-kit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // 창 포커스 시 재요청 비활성화
        staleTime: 5 * 60 * 1000, // 데이터 유효 시간을 5분으로 설정, 최초 실행 5분 후 서버에 데이터 재요청
        retry: 1, // 쿼리함수가 error를 throw 시 한번만 재요청
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <BrowserRouter>
          <JotaiProvider>
            <Router />
            <ToastContainer autoClose={2000} pauseOnFocusLoss={false} stacked={false} newestOnTop={true} />
          </JotaiProvider>
        </BrowserRouter>
      </OverlayProvider>
    </QueryClientProvider>
  );
};

export default App;
