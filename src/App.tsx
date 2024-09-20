import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import JotaiProvider from "./JotaiProvider";
import { OverlayProvider } from "overlay-kit";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <BrowserRouter>
          <JotaiProvider>
            <Router />
          </JotaiProvider>
        </BrowserRouter>
      </OverlayProvider>
    </QueryClientProvider>
  );
};

export default App;
