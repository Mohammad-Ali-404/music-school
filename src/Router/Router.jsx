import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllClasses from "../Pages/Home/AllClasses";
import AllInstructor from "../Pages/Home/AllInstructor";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'classes',
          element:<AllClasses></AllClasses>
        },
        {
          path:'instructor',
          element:<PrivateRoute><AllInstructor></AllInstructor></PrivateRoute>
        }
      ]
    },
  ]);
export default router;