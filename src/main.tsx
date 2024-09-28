import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocalStorageAdapter } from "./LocalStorageAdapter.ts";
import { Analytics } from "@vercel/analytics/react"

const localStorageAdapter = new LocalStorageAdapter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <App toDoListRepository={localStorageAdapter} />
  </StrictMode>
);