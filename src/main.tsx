import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Providers from "./providers/provider";
import { routes } from "./routes/route";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={routes} />
  </Providers>,
);
