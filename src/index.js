import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import PasswordTextField from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <PasswordTextField />
  </StrictMode>
);
