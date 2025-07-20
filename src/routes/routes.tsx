import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/Root";
import DashboardPage from "../components/Dashboard/DashboardPage";
import HomePage from "../components/Home/HomePage";

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
    ],
  },
]);

export default router;
