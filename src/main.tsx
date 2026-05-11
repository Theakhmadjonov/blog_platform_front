// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import "./index.css";
// import Providers from "./providers/provider";
// import { routes } from "./routes/route";

// createRoot(document.getElementById("root")!).render(
//   <Providers>
//     <RouterProvider router={routes} />
//   </Providers>,
// );

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes/route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={routes} />
  </AuthProvider>,
);
