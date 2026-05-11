// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import BlogPage from "../pages/BlogPage";
// import Profile from "../pages/Profile";

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/blog/:blogId",
//     element: <BlogPage />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
// ]);

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog/:blogId",
        element: <BlogPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
