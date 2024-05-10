import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/error/Error";
import MainLayout from "./MainLayout";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import ProductsList from "../pages/products/ProductsList";
import Favorites from "../pages/favorites/Favorites";

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      { path: "/", element: <ProductsList /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);
