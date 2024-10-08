import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/font/font.css";

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

createRoot(document.getElementById("root")!).render(<App />);

{
  /* <StrictMode>
    <App />
  </StrictMode>, */
}
