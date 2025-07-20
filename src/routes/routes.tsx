import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/Root";
import DashboardPage from "../components/Dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
