import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from "react";
import "./index.css";

import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
