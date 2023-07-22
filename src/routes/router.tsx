import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);

export default routes;
