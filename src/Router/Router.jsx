import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllClasses from "../Pages/Home/AllClasses";
import AllInstructor from "../Pages/Home/AllInstructor";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
          element:<AllInstructor></AllInstructor>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);
export default router;