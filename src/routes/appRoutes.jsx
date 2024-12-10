import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../pages/Auth/Login"
import { Layout } from "../pages/Dashboard/Layout"
import { Main } from "../pages/Dashboard/Main"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "main",
          element: <Main />
        }
      ]
    }
  ])
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />
  }