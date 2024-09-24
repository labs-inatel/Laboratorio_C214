import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocalStorageAdapter } from "./LocalStorageAdapter.ts";

const localStorageAdapter = new LocalStorageAdapter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App toDoListRepository={localStorageAdapter} />
  </StrictMode>
);