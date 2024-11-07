import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import JotaiProvider from "./JotaiProvider";
import { OverlayProvider } from "overlay-kit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

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
