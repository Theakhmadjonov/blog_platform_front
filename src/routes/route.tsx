import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateBlogPage from "../pages/CreateBlogPage";
// import UpdateBlogPage from "../pages/UpdateBlogPage";
import ProtectedRoute from "../components/ProtectedRoute";

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
        path: "/post/:postId",
        element: <BlogPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-blog",
        element: (
          <ProtectedRoute>
            <CreateBlogPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-blog/:blogId",
        element: (
          <ProtectedRoute>
            <CreateBlogPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
