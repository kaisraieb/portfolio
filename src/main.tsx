import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Toaster } from "sonner"; // if you use path alias

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
