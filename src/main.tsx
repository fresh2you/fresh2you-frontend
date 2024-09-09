import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './assets/font/font.css';

createRoot(document.getElementById('root')!).render(<App />);

{
  /* <StrictMode>
    <App />
  </StrictMode>, */
}
