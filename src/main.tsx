import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "@/app";
import "@/index.css";

const rootElement = document.getElementById("root")!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
