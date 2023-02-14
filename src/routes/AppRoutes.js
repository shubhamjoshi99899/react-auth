import { useRoutes } from "react-router-dom";
import Dashboard from "../presentation/pages/Dashboard";
import Login from "../presentation/pages/Login";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      name: "Email Authentication",
      element: <Login />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
    },
  ]);
  return routes;
};

export default AppRoutes;
