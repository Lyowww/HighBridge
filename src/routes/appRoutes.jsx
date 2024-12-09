import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../pages/Auth/Login"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    }
  ])
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />
  }