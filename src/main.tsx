import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import "./i18n"; 
import { ReduxProvider } from "./store/provider.tsx";


createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);