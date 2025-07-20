import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/Root";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import HomePage from "../components/Home/HomePage";
import Login from "../components/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
