import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../page/Home";
import SignUp from "../page/SignUp/SignUp";
import Login from "../page/Login/Login";

//import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
     
   
    ],
  },
]);

export default routes;
