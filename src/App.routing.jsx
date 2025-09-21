import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LayoutPage from "./components/Layout";
import Home from "./Home/home";
import OrderList from "./Order-List/order_list.jsx";

function AllRoutes() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutPage />,
        children: [
          {
            path: "/",
            element: <Navigate to="/home" />
          },
          {
            path: "/home",
            element: <Home />
          },
          {
            path: "/order-list",
            element: <OrderList />
          },
        ]
      },
      {
        path: '/*',
        element: <Navigate to="/home" />
      }
    ]);

  return <RouterProvider router={router} />;
}

export default AllRoutes